import {
  faFileVideo,
  faPhotoVideo,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import {
  PencilFill,
  FilePost,
  Calendar2Event,
  JournalCheck,
  MusicPlayer,
} from "react-bootstrap-icons";
import "./StartAPost.css";

const StartAPost = () => {
  return (
    <>
      <div className="feed">
        <div className="feed__inputContainer">
          <div className="feed__input">
            <PencilFill />
            <form>
              <input
                type="text"
                name="post"
                id="post-content"
                placeholder="Start a post"
              />
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="feed__inputOptions d-flex justify-content-between mt-2 mx-1">
            <span className=" d-flex">
              <FilePost size={26} />
              <h6 style={{ color: "gray" }}>Photo</h6>{" "}
            </span>
            <span className="d-flex ">
              <MusicPlayer size={26} />
              <h6 style={{ color: "gray" }}>Video</h6>{" "}
            </span>

            <span className="d-flex ">
              <Calendar2Event size={26} />
              <h6 style={{ color: "gray" }}>Events</h6>{" "}
            </span>
            <span className="d-flex ">
              <JournalCheck size={26} />
              <h6 style={{ color: "gray" }}>Write Articles</h6>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartAPost;
