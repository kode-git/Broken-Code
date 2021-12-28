from django.shortcuts import render

# Create your views here.


def index(request):
    print('Welcome to the website logs')
    if request.method == "GET":
        return render(request, "index.html", {}) 
    return render(request, 'index.html', {})
