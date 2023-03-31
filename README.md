# Simple Microservice

Make sure you have installed docker on your machine. 

### Create docker image
```
docker build . -t <repository-name>
```
### Run the project
``` 
docker run -d -p 3000:3000 <repository-name> 
```
### Open your browser 
```
localhost:3000
```