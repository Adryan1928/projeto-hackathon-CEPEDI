import paho.mqtt.client as mqtt

def on_connect(client, userdata, flags, rc, properties=None):
    print("CONNACK received with code %s." % rc)

def on_publish(client, userdata, mid, properties=None):
    print("mid: " + str(mid))

def on_subscribe(client, userdata, mid, granted_qos, properties=None):
    print("Subscribed: " + str(mid) + " " + str(granted_qos))

def on_message(client, userdata, msg):
    print(msg.topic + " " + str(msg.qos) + " " + str(msg.payload))

client = mqtt.Client(client_id="", userdata=None, protocol=mqtt.MQTTv5, transport="tcp")
client.on_connect = on_connect

client.tls_set(cert_reqs=mqtt.ssl.CERT_NONE, tls_version=mqtt.ssl.PROTOCOL_TLS)

client.username_pw_set("", "")

client.connect("broker.mqttdashboard.com", 8883)

client.on_subscribe = on_subscribe
client.on_message = on_message
client.on_publish = on_publish

client.subscribe("Projeto/mpu6050/aceleracao", qos=2)

client.subscribe("Projeto/dht22/temperaturaeumidade", qos=2)

client.publish("Projeto/teste", payload="Olá", qos=2)

client.loop_forever()

