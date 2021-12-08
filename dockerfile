FROM python:latest
COPY requirements.txt /
RUN pip3 install -r /requirements.txt

COPY . /app
WORKDIR /app


ENTRYPOINT ["./app/gunicorn_starter.sh"]