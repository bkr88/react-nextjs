import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    address: 'Some address 5, 12345, City',
    description: 'Meetup description',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1280px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    address: 'Some address 5, 12345, City',
    description: 'Meetup description',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1280px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    address: 'Some address 5, 12345, City',
    description: 'Meetup description',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1280px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
