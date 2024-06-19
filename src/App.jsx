// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard';

// src/App.jsx
function App() {
  const users = [
    {
      name: 'Ifan Xavier',
      age: 19,
      profilePicture: 'https://i.pinimg.com/236x/06/cf/8d/06cf8d3dd0600b35fb36005fe8104250.jpg',
      bio: 'Software developer and technology enthusiast.'
    },
    {
      name: 'Nimrode Maina',
      age: 23,
      profilePicture: 'https://i.pinimg.com/736x/0a/9c/76/0a9c7658d615fe206a0fb41ac5e65b36.jpg',
      bio: 'Financial Economist.'
    },
    {
      name: 'Miriam Maina',
      age: 23,
      profilePicture: 'https://i.pinimg.com/236x/27/3b/4e/273b4e8fcbb85ad3c61ff30c46e295d4.jpg',
      bio: 'Digital marketer and content creator.'
    },
    {
      name: 'Maryanne Maina',
      age: 12,
      profilePicture: 'https://i.pinimg.com/236x/27/b1/3e/27b13e1c3edd77e827b70202e1288636.jpg',
      bio: 'Software student .'
    },
    {
      name: 'Moses kiprop',
      age: 28,
      profilePicture: 'https://i.pinimg.com/236x/7b/a1/ad/7ba1adaf42f41655c68262e269534560.jpg',
      bio: 'Software developer and technology enthusiast.'
    },
    {
      name: 'Abdul Melo',
      age: 26,
      profilePicture: 'https://i.pinimg.com/236x/29/0b/75/290b75b66563c9194c3f093ec03aeb91.jpg',
      bio: 'Software developer and technology enthusiast.'
    },
    {
      name: 'Nancy Machuka',
      age: 18,
      profilePicture: 'https://i.pinimg.com/236x/e0/56/91/e05691f5e3808528419fccf618930c10.jpg',
      bio: 'Software developer and technology enthusiast.'
    },
    {
      name: 'Betty mbita',
      age: 15,
      profilePicture: 'https://i.pinimg.com/236x/79/a5/5f/79a55f2b203b8a9c80909a92799df819.jpg',
      bio: 'Software developer and technology enthusiast.'
    },
    {
      name: 'Bitu njoro',
      age: 25,
      profilePicture: 'https://i.pinimg.com/474x/e9/57/58/e9575834344cb92d39b302ba71700f1b.jpg',
      bio: 'Software developer and technology enthusiast.'
    },
    {
      name: 'Mwende macharia',
      age: 28,
      profilePicture: 'https://i.pinimg.com/236x/de/9c/4a/de9c4acc7793ff5d69e71fe065fe3b8b.jpg',
      bio: 'Software developer and technology enthusiast.'
    },
    {
      name: 'Peter Mwaki',
      age: 56,
      profilePicture: 'https://i.pinimg.com/474x/c4/c3/bd/c4c3bd4fc5f9841588e0138181292eb7.jpg',
      bio: 'Software developer and technology enthusiast.'
    },
    {
      name: 'Texas Russian',
      age: 35,
      profilePicture: 'https://i.pinimg.com/236x/81/1f/33/811f33b62aa02ec02a7608baf9426ac2.jpg',
      bio: 'Software developer and technology enthusiast.'
    },
    {
      name: 'American Boss',
      age: 34,
      profilePicture: 'https://i.pinimg.com/236x/2f/78/e6/2f78e66abc7f9ae08dfdb1148a802b78.jpg',
      bio: 'Software developer and technology enthusiast.'
    },
    {
      name: 'Xavier Junior',
      age: 2,
      profilePicture: 'https://i.pinimg.com/236x/82/e6/cd/82e6cdbc0b6294e9ce64f1f9de11f273.jpg',
      bio: 'Software developer and technology enthusiast.'
    }
  ];

  return (
    <>
    <div className="app">
      <h1>User Profiles</h1>
      <div className="profile-cards-container">
        {users.map((user, index) => (
          <ProfileCard
            key={index}
            name={user.name}
            age={user.age}
            profilePicture={user.profilePicture}
            bio={user.bio}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;

