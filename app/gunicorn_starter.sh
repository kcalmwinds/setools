#!/bin/sh
export FLASK_APP=setools
gunicorn --chdir app  -w 2 --threads 2 -b 0.0.0.0:8003 "main:create_app()"