GOOGLE_PROJECT_ID=
CLOUD_RUN_SERVICE=
INSTANCE_CONNECTION_NAME=
DB_USER=
DB_PASSWORD=
DB_NAME=

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
 --project=$GOOGLE_PROJECT_ID \
 /

gcloud run deploy $CLOUD_RUN_SERVICE \
 --image gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
 --add-cloudsql-instances $INSTANCE_CONNECTION_NAME \
 --update-env-vars INSTANCE_CONNECTION_NAME=$INSTANCE_CONNECTION_NAME,DB_PASSWORD=$DB_PASSWORD,DB_USER=$DB_USER,DB_NAME=$DB_NAME \
 --platform managed \
 --region us-central1 \
 --allow-unauthenticated \
 --project=$GOOGLE_PROJECT_ID \
 /
