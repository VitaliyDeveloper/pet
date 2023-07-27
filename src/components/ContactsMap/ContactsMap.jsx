import GoogleMapReact from 'google-map-react';
import {
  MainContainerMap,
  ContactsContainer,
  Map,
  ContactsList,
  ContactsItems,
} from './ContactsMap.styled';

const ContactsMap = () => {
  const defaultProps = {
    center: {
      lat: 43.19934,
      lng: 76.62974,
    },
    zoom: 18,
  };

  return (
    <MainContainerMap>
      <ContactsContainer>
        <ContactsList>
          <ContactsItems>+7 777 777 77 77</ContactsItems>
          <ContactsItems>good_company@gmail.com</ContactsItems>
          <ContactsItems>Kazakhstan, Almaty</ContactsItems>
        </ContactsList>
      </ContactsContainer>
      <Map style={{ height: '300px', width: '350px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <div lat={43.19934} lng={76.62974} text="My Marker" />
        </GoogleMapReact>
      </Map>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288.55836637059843!2d76.62951393652604!3d43.19930154800079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38834f775eddab4b%3A0xc65e012398afb7fb!2z0KLQpiDQl9Cw0LzQt9Cw!5e0!3m2!1sru!2skz!4v1690456722650!5m2!1sru!2skz"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </MainContainerMap>
  );
};

export default ContactsMap;
