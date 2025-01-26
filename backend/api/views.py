from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from backend_functions.get_yelp_data import *
from yelpapi import YelpAPI
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path='hidden.env')
api_key = os.getenv('YELP_API_KEY')
yelp_api = YelpAPI(api_key)

@api_view(['POST'])
def process(request):
    location = request.data.get('location')
    locationType = request.data.get('locationType')
    respone = get_cafes(api_key,location,locationType)
    return Response(respone)