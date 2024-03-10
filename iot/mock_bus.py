import json
import numpy as np
import paho.mqtt.client as mqtt

def on_connect(client, userdata, flags, rc, properties=None):
    print("CONNACK received with code %s." % rc)

def on_publish(client, userdata, mid, properties=None):
    print("mid: " + str(mid))

def on_subscribe(client, userdata, mid, granted_qos, properties=None):
    print("Subscribed: " + str(mid) + " " + str(granted_qos))

def on_message(client, userdata, msg):
    print(msg.topic + " " + str(msg.qos) + " " + str(msg.payload))

def publish_message(topic, message, qos):
    client.publish(topic, message, qos)

def subscribe_topic(topic, qos):
    client.subscribe(topic, qos)

id = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"]
model = ["Mercedes Benz", "Scania", "Volvo", "Agrale", "jimbei", "International", "Volkswagen", "Iveco", "Marcopolo", "Volare" ]

client = mqtt.Client(client_id="bus_mock", userdata=None, protocol=mqtt.MQTTv5, transport="tcp")
client.on_connect = on_connect

client.tls_set(cert_reqs=mqtt.ssl.CERT_NONE, tls_version=mqtt.ssl.PROTOCOL_TLS)

client.username_pw_set("", "")

client.connect("broker.mqttdashboard.com", 8883)

client.on_subscribe = on_subscribe
client.on_message = on_message
client.on_publish = on_publish

changes = 10
for bus in range(changes):
    if bus == 0:
        client.loop_start()
    if bus == changes:
        client.loop_stop()

    bus_id = id[bus]
    bus_model = model[bus]
    #print(f"Id: {bus_id}\nModel: {bus_model}")
    temperature = np.random.uniform(20, 35, changes)

    acelerometer_x = np.random.uniform(-2.0, 2.0, changes)
    acelerometer_y = np.random.uniform(-2.0, 2.0, changes)
    acelerometer_z = np.random.uniform(-2.0, 2.0, changes)

    gyroscope_x = np.random.uniform(-250.0, 250.0, changes)
    gyroscope_y = np.random.uniform(-250.0, 250.0, changes)
    gyroscope_z = np.random.uniform(-250.0, 250.0, changes)
    #print(f"Temperature: {temperature}\nAcelerometer x{acelerometer_x}\nAcelerometer y{acelerometer_y}\nAcelerometer z{acelerometer_z}\nGyroscope x{gyroscope_x}\nGyroscope y{gyroscope_y}\nGyroscope z{gyroscope_z}\n")
    
    response_bus = {
        "Id" : bus_id,
        "Model" : bus_model
    }
    response_temperature = {
        "Temperature" : temperature.tolist()
    }

    response_acelerometer = {
        "Acelerometer_x" : acelerometer_x.tolist(),
        "Acelerometer_y" : acelerometer_x.tolist(),
        "Acelerometer_z" : acelerometer_x.tolist()
    }
    
    response_gyroscope = {
        "Gyroscope_x" : gyroscope_x.tolist(),
        "Gyroscope_y" : gyroscope_y.tolist(),
        "Gyroscope_z" : gyroscope_z.tolist(),
    }

    temperature_publish = json.dumps(response_temperature)
    acelerometer_publish = json.dumps(response_acelerometer)
    gyroscope_publish = json.dumps(response_gyroscope)

    publish_message("Projeto/dht22/temperaturaeumidade", temperature_publish, 2)
    publish_message("Projeto/mpu6050/aceleracao", acelerometer_publish, 2)
    publish_message("Projeto/mpu6050/aceleracao", gyroscope_publish, 2)
