from ultralytics import YOLO
import cv2
import math
import numpy as np

model = YOLO('../yolov8n.pt')

def predict(image):
  global model

  pred = model.predict(image, classes=0)
  image_height = image.shape[0]

  count = 0

  for r in pred:
    for bbox in r.boxes:
      x1, y1, x2, y2 = bbox.xyxy[0]
      x1, y1, x2, y2 = int(x1), int(y1), int(x2), int(y2)

      width, height = math.fabs(x1 - x2), math.fabs(y1 - y2)

      print(height - y1)

      is_standing_aspect_ratio = height / width - (y1 / image_height) * 2

      is_standing = is_standing_aspect_ratio >= 1

      print(f'is_standing {is_standing_aspect_ratio}')

      if (is_standing):
        count += 1

        cv2.rectangle(image, (x1, y1), (x2, y2), (255, 0, 0), 3)

  return image, count

cam = cv2.VideoCapture(0)

while cam.isOpened():
  _, frame = cam.read()

  frame = np.array(frame)

  print(frame.shape)

  image, count = predict(frame)

  cv2.imshow('IsStanding', mat=image)

  if cv2.waitKey(1) == ord('q'):
    break


cam.release()
cv2.destroyAllWindows()
