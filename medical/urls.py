from django.urls import path
from .views import *

urlpatterns = [
    path('', dispatching_m_p, name='dispatching_m_p'),
    path('dispatching_p_g/', dispatching_p_g, name='dispatching_p_g'),
    path('dispatching_p_h/', dispatching_p_h, name='dispatching_p_h'),
    path('dispatching_p_i/',  dispatching_p_i, name='dispatching_p_i'),
    path('dispatching_p_s/',  dispatching_p_s, name='dispatching_p_s'),
    path('events/', events, name='events'),
    path('login/', login, name='login'),
    path('patients_a/', patients_a, name='patients_a'),
    path('patients_m_p/', patients_m_p, name='patients_m_p'),
    path('patients_s/', patients_s, name='patients_s'),
    path('register/', register, name='register'),
    path('register_a_sh/', register_a_sh, name='register_a_sh'),
    path('register_ch/', register_ch, name='register_ch'),
    path('register_c/', register_c, name='register_c'),
    path('register_d/', register_d, name='register_d'),
    path('register_m_h/', register_m_h, name='register_m_h'),
    path('register_o/', register_o, name='register_o'),
    path('register_p/', register_p, name='register_p'),
    path('register_p_s/', register_p_s, name='register_p_s'),
    path('register_s/', register_s, name='register_s'),


]
