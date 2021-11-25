from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
import icecream as ic

from user.models import User
from user.serializers import UserSerializer


@api_view(['GET', 'POST', 'PUT'])
@parser_classes([JSONParser])
def user(request):
    print('======================================')
    if request.method == 'GET':
        all_users = User.object.all()
        serializer = UserSerializer(all_users, many=True)
        return JsonResponse(data=serializer, safe=False)
    elif request.method == 'POST':
        # print('=============ddddd=================')
        new_user = request.data
        print(f'><><><><><><><><><><{new_user}')
        # print('=============dsfsdf=================')
        serializer = UserSerializer(data=new_user)
        print(f'{serializer}')
        # ic('==============================================')
        if serializer.is_valid():
            print('*****************************************')
            serializer.save()
            return JsonResponse({'result': f'Welcome,{serializer.data.get("name")}'}, status=201)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    try:
        print('들어왔다고 해줘........여기까지만이라도.........................')
        loginUser = request.data
        print(f'============={type(loginUser)}')
        dbUser = User.objects.get(email=loginUser['email'])
        print(f'{dbUser}')
        if loginUser['password'] == dbUser.password:
            print('======================로그인 성공')
            userSerializer = UserSerializer(dbUser, many=False)

            return JsonResponse(data=userSerializer.data, safe=False)
        else:
            print('===========================비밀번호 오류')
            return JsonResponse(data={'rsult' :'PASSWORD-FAIL' }, status= 201)

        return JsonResponse(data=serializer, safe=False)
    except User.DoesNotExist:
        print('*' *100)
        print('에러에러에러에러에러 발생!!!!!!!!!!!!!!!!!!!!!')
        return JsonResponse(data={'result':'USERNAME-FAIL'}, status=201)

# Create your views here.
