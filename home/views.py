from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.sessions.models import Session
from django.utils import timezone
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt  
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            all_sessions = Session.objects.filter(expire_date__gte=timezone.now())
            for session in all_sessions:
                data = session.get_decoded()
                if data.get('_auth_user_id') == str(user.id):
                    session.delete()

            login(request, user)  # Django handles session auth
            request.session['user_id'] = user.id  # manually store user_id if needed
            return HttpResponse(f"Login successful! User ID: {user.id}")
        else:
            return HttpResponse(f"Invalid Password")
    return HttpResponse("Invalid username or password", status=401)

