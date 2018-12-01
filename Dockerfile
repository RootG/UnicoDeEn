FROM openjdk:8-jre-alpine

COPY build/libs/UnicoDeEn.jar .
EXPOSE 4567
CMD java -jar UnicoDeEn.jar
