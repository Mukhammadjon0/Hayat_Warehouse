from django.shortcuts import render

# Create your views here.


def index(requests):
    ctx = {

    }
    return render(requests, 'Hospital/login.html', ctx)