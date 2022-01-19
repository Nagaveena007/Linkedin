import { faFileVideo, faPhotoVideo, faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { PencilFill, FilePost, Calendar2Event, JournalCheck,MusicPlayer} from 'react-bootstrap-icons'
import '../FeaturedPosts/StartAPost.css'

const StartAPost = () => {

    return (
        <>
            <div className="feed">
                <div className="feed__inputContainer">
                    <div className="feed__input">
                        <PencilFill />
                        <form>
                            <input type="text" name="post" id="post-content" placeholder='Start a post' />
                            <button type='submit'>Send</button>
                        </form>

                    </div>
                    <div className="feed__inputOptions d-inline-flex space-evenly mt-2 mx-1">
                        <FilePost size={26}/>  
                        <h4 style={{color:'gray'}}>Photo</h4>
                        <MusicPlayer size={26}/> 
                        <h4 style={{color:'gray'}}>Video</h4>
                        <Calendar2Event size={26}/> 
                        <h4 style={{color:'gray'}}>Events</h4>
                        <JournalCheck size={26}/> 
                        <h4 style={{color:'gray'}}>Write Articles</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartAPost;