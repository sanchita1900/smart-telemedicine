import Cookies from 'js-cookie';

export const patientSignupApi = async (regName, regEmail, regPassword) => {
    const data = await fetch('http://localhost:5000/patientSignup', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: regName,
      email: regEmail,
      password: regPassword,
    }),
  });
  return await data.json();
};

export const patientLoginApi = async (loginEmail,loginPassword) => {
    const data = await fetch('http://localhost:5000/patientLogin', {
        method: 'post',
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });
      return await data.json();
};

export const doctorSignupApi = async (regName, regEmail, regPassword) => {
    const data = await fetch('http://localhost:5000/docSignup', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: regName,
      email: regEmail,
      password: regPassword,
    }),
  });
  return await data.json();
};

export const doctorLoginApi = async (loginEmail,loginPassword) => {
    const data = await fetch('http://localhost:5000/docLogin', {
        method: 'post',
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });
      return await data.json();
};

export const patientProfileApi = async() => {
    const data = await fetch('http://localhost:5000/patient/profile/', {
        method: 'get',
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
            'Content-Type': 'application/json',
        }
    });
    return await data.json();
};

export const patientProfileUpdateApi = async(formData) => {
  const data = await fetch('http://localhost:5000/patient/profile/', {
    method: 'post',
    body:JSON.stringify(formData),
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    }
  });
  return await data.json();
};

export const doctorProfileApi = async() => {
  const data = await fetch('http://localhost:5000/doctor/profile/', {
      method: 'get',
      headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
          'Content-Type': 'application/json',
      }
  });
  return await data.json();
};

export const doctorProfileUpdateApi = async(formData) => {
  const data = await fetch('http://localhost:5000/doctor/profile/', {
    method: 'post',
    body:JSON.stringify(formData),
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    }
  });
  return await data.json();
};

export const getDoctorsApi = async() => {
  const doctor = await fetch('http://localhost:5000/patient/getDoctors',{
    method: 'get',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type':'application/json',
    }
  });
  return await doctor.json();
}

export const sendRequestApi = async(id) => {
  const data = await fetch(`http://localhost:5000/patient/sendRequest/${id}`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      }
  });
  return await data.json();
}

export const cancelRequestApi = async(id) => {
  const data = await fetch(`http://localhost:5000/patient/cancelRequest/${id}`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      }
  });
  return await data.json();
}

export const checkInvitationApi = async() => {
  const data = await fetch(`http://localhost:5000/doctor/checkInvitation`,{
    method :'get',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    }
  });
  console.log(data);
  return await data.json();
}