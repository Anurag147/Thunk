import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from './Button';

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  const [addAlbum, results] = useAddAlbumMutation();

  let content;
  if (isLoading) {
    content = <Skeleton times={3}></Skeleton>;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album) => {
      return (
        <ExpandablePanel key={album.id} header={<div>{album.title}</div>}>
          List of photos in the album
        </ExpandablePanel>
      );
    });
  }
  console.log(data);
  return (
    <>
      {" "}
      <div>
        Albums for {user.name}
        <Button onClick={()=>{
          addAlbum(user);
        }}>+ Add Album</Button>
      </div>
      <div>{content}</div>
    </>
  );
}

export default AlbumsList;
