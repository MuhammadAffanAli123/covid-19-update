FROM  node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install 
ADD src /usr/src/app/app
ADD public /usr/src/app/publiC
EXPOSE 8100
CMD ["npm","start"]

