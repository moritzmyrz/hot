import contentful from 'contentful';

const client = contentful.createClient({
  space: "6fql8it9e25a",
  accessToken: "-Xdb7k4rZQP06-xxL-1yHF15Dynu8wXbnmkbaog0H-Y",
});
client
  .getEntry("5PeGS2SoZGSa4GuiQsigQu")
  .then((entry) => console.log(entry))
  .catch((err) => console.log(err));

const Posts: React.FC = () => {
  return <></>;
};

export default Posts;
