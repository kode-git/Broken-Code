FROM alpine:3.15.0
FROM python:3.8

RUN apt-get update

COPY requirements.txt .
RUN pip install -r requirements.txt

CMD ["bash"]
