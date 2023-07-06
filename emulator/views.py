from django.shortcuts import render,HttpResponse
# messages
from django.utils.safestring import mark_safe
from django.contrib import messages
# to check the url
from urllib.parse import urlparse
import urllib.request
import requests
# display external page
from bs4 import BeautifulSoup
from user_agents import parse
# for embedding the display_page
from django.views.decorators.clickjacking import xframe_options_sameorigin

# function to check the url
def is_valid_url(url):
    try:
        # Parse the URL and check if the scheme and netloc are present
        result = urlparse(url)
        return all([result.scheme, result.netloc])
    except ValueError:
        return False


# check urls embeddable to iframe tag
def is_embeddable(url):
  """Returns True if the website is embeddable in HTML iframe tag, False otherwise."""
  response = requests.get(url)
  if response.status_code == 200:
    headers = response.headers
    if "X-Frame-Options" in headers and headers["X-Frame-Options"] == "DENY":
      return False
    else:
      return True
  else:
    return False

# modify google url
def modify_google_url(url):
    if (url=="https://google.com"):
        return "https://google.com?igu=1"
    elif (url=="https://www.google.com" ):
        return "https://google.com?igu=1"
    elif (url=="https://www.google.in"):
        return "https://google.com?igu=1"
    elif (url=="https://google.in"):
        return "https://google.com?igu=1"
    elif (url=="https://www.google.co.in"):
        return "https://google.com?igu=1"
    elif (url=="https://google.co.in"):
        return "https://google.com?igu=1"
    elif (url=="http://google.com"):
        return "http://google.com?igu=1"
    elif (url=="http://www.google.com"):
        return "http://google.com?igu=1"
    elif (url=="http://www.google.in"):
        return "https://google.com?igu=1"
    elif (url=="http://google.in"):
        return "https://google.com?igu=1"
    elif (url=="http://www.google.co.in"):
        return "https://google.com?igu=1"
    elif (url=="http://google.co.in"):
        return "https://google.com?igu=1"
    else:
        return url


# Create your views here.
def index(request):
    return render(request,"index.html")
    
def emulate(request):
    if request.method == "POST":
        url = request.POST["floating_url"]
        url = modify_google_url(url)
        
        if (is_valid_url(url)):
            if is_embeddable(url):
                return render(request,"emulate.html",{"url":url})
            else:
                domain = request.get_host()
                url = f"http://{domain}/display-page?url={url}"
                
                messages.warning(request,mark_safe('''
                Your website is not Embeddable.This might not render properly.<b><a href="#" style="text-decoration:underline;cursor:pointer;">Learn more</a></b>
                '''))
                return render(request,"emulate.html",{"url":url})
        else:
            messages.error(request,"Invalid Url,Please try different url.")
            return render(request,"index.html")
    else:
        # HttpResponse("404 - not - found")
        return render(request,"emulate.html",{"url":"https://google.com?igu=1"})
    
# takes url and displays page (Not same as Original page)
@xframe_options_sameorigin
def display_page(request):
    url = request.GET.get('url')  # Get the URL parameter from the request

    if url:
        try:
            headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
            response = requests.get(url)  # set custom User-Agent
            content = response.text  # Get the content of the response
            
            # Detect the user agent and determine the device type
            user_agent_string = request.META.get('HTTP_USER_AGENT', '')
            user_agent = parse(user_agent_string)
            device_type = user_agent.device.family  # Possible values: 'Desktop', 'Mobile', 'Tablet'
            
            return HttpResponse(content)
        except requests.exceptions.RequestException as e:
            return HttpResponse(f"Error: {e}")  # Display an error message if the request fails
    else:
        return HttpResponse("No URL parameter provided.")
