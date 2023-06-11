FROM python:3.11

RUN mkdir -p /appback

COPY ./requirements.txt /appback/

WORKDIR /appback

RUN pip install -r requirements.txt

COPY ./ /appback/

ENTRYPOINT ["python", "app.py"]