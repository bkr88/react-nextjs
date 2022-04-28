import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      id={props.id}
      title={props.title}
      address={props.address}
      description={props.description}
      image={props.image}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params;

  console.log(meetupId);

  return {
    props: {
      id: 'm3',
      title: 'A Third Meetup',
      address: 'Some address 5, 12345, City',
      description: 'Meetup description',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1280px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
    },
  };
};

export default MeetupDetails;
