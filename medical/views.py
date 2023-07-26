from django.shortcuts import render


# Create your views here.


def dispatching_m_p(requests):
    return render(requests, 'Hospital/dispatching-my-patients.html', {})


def dispatching_p_g(requests):
    return render(requests, 'Hospital/dispatching-patient-gidrokolonoterapiya.html', {})


def dispatching_p_h(requests):
    return render(requests, 'Hospital/dispatching-patient-hydrobaths.html', {})


def dispatching_p_i(requests):
    return render(requests, 'Hospital/dispatching-patient-info.html', {})


def dispatching_p_s(requests):
    return render(requests, 'Hospital/dispatching-patient-schedule.html', {})


def events(requests):
    return render(requests, 'Hospital/events.html', {})


def login(requests):
    return render(requests, 'Hospital/login.html', {})


def patients_a(requests):
    return render(requests, 'Hospital/patients-accounts.html', {})


def patients_m_p(requests):
    return render(requests, 'Hospital/patients-my-patients.html', {})


def patients_s(requests):
    return render(requests, 'Hospital/patients-search.html', {})


def register(requests):
    return render(requests, 'Hospital/register.html', {})


def register_a_sh(requests):
    return render(requests, 'Hospital/register-appointment_sheet.html', {})


def register_ch(requests):
    return render(requests, 'Hospital/register-changelog.html', {})


def register_c(requests):
    return render(requests, 'Hospital/register-count.html', {})


def register_d(requests):
    return render(requests, 'Hospital/register-document.html', {})


def register_m_h(requests):
    return render(requests, 'Hospital/register-medical-history.html', {})


def register_o(requests):
    return render(requests, 'Hospital/register-outpatient.html', {})


def register_p(requests):
    return render(requests, 'Hospital/register-patient.html', {})


def register_p_s(requests):
    return render(requests, 'Hospital/register-patient-step-1.html', {})


def register_s(requests):
    return render(requests, 'Hospital/register-schedule.html', {})




























