# Google Cloud Functions local and live env

> Google Cloud Functions only supports v6.11.5

## Project structure

Google Cloud Functions includes and runs project as Node module. Every function should be exported with same function name used during deploy.
For more information how to organize project find [here](https://cloud.google.com/functions/docs/writing/)

---

## Install emulator

Run `npm install -g @google-cloud/functions-emulator`

## Setup project id 

Run `functions-emulator`

On request:

`Enter a projectId to get started: projectId:`

enter project id from google cloud console.

## Install Google cloud sdk

Install from [Google Cloud SDK](https://cloud.google.com/sdk/) or brew cask.


## Auth to google cloud console with terminal

Run `gcloud auth`


## Deploy function to emylator

Run `functions-emulator deploy helloGET --trigger-http`

where `helloGet` - function name

## Deploy function to Google Cloud Functions

Run `gcloud functions deploy helloCounter --trigger-http`

where `helloGet` - function name
and `--trigger-http` [Function triggers](https://cloud.google.com/functions/docs/concepts/events-triggers)


