from rest_framework import serializers
from django.contrib.auth import get_user_model


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = get_user_model()
        fields = ('username', 'password', 'email')


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'email', 'date_joined', 'wishlist', )


class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('wishlist', )
