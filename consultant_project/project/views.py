from django.shortcuts import render


def index(request):
    return render(request, "index.html")


def documents(request):
    return render(request, "documents.html")


def risks(request):
    return render(request, "documents.html")
