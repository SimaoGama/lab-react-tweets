import Actions from './Actions';
import Message from './Message';
import ProfileImage from './ProfileImage';
import Timestamp from './Timestamp';
import User from './User';

function Tweet(props) {
  const { timestamp, message } = props.tweet;
  const { name, handle, image } = props.tweet.user;

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User user={(name, handle)} />
          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message} />
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;
