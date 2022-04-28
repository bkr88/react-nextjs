import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <MeetupDetail
      id={'m2'}
      title={'A Second Meetup'}
      address={'Some address 5, 12345, City'}
      description={'Meetup description'}
      image={
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1280px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG'
      }
    />
  );
};

export default MeetupDetails;
