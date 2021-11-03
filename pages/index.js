import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://london.ac.uk/sites/default/files/styles/promo_large/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=BMaDUhjp",
    address: "England, London city",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://london.ac.uk/sites/default/files/styles/promo_large/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=BMaDUhjp",
    address: "Some address 10, 1235 some city",
    description: "This is a second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   //fetch data from an api
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps(context) {
  //fetch data from an api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    }, // will be passed to the page component as props
    revalidate: 1
  };
}

export default HomePage;
