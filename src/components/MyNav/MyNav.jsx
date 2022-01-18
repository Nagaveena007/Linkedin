import { useEffect } from "react"
import { useState } from "react"
import {
    Container,
    Navbar,
    Form,
    FormControl,
    InputGroup,
    OverlayTrigger,
    Popover,
    ListGroupItem,
    ListGroup,
    Button
} from "react-bootstrap"
import { Link } from 'react-router-dom'
import {
    Search,
    HouseDoorFill,
    PeopleFill,
    BriefcaseFill,
    ChatDotsFill,
    BellFill,
    CaretDownFill,
    Grid3x3GapFill
} from 'react-bootstrap-icons'
import './Navbar.css';
const {REACT_APP_TOKEN} = process.env;

const MyNav = ({userProfile, setUserProfile}) => {
    
    const [showPopOver, setShowPopOver] = useState(true)

    useEffect(() => {
        getUserInfo();
        //eslint-disable-next-line
    }, []);

    const getUserInfo = async () => {
        try {
            const url = "https://striveschool-api.herokuapp.com/api/profile/me"
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${REACT_APP_TOKEN}`
                }
            })
            if (response.ok) {
                const userData = await response.json()
                setUserProfile(userData)
                return userProfile
            }
        } catch (error) {
            console.log('Error', error.message)
        }
    }
    const mePopover = (
        <Popover id='popover-contained'>
            <Popover.Content>
                <ListGroupItem>
                    <div className="d-flex modal-profile-container">
                        <div>
                            <img
                                src={userProfile.image}
                                alt="profile-pic"
                            />
                        </div>
                        <div className="ml-3">
                            <h5>
                                {userProfile.name} {userProfile.surname}
                            </h5>
                            <p>{userProfile.title}</p>
                        </div>
                    </div>
                    <div id="modal-view-profile-btn-container">
                        <Link to={`/profile/${userProfile._id && userProfile._id}`}>
                            <Button
                                id="modal-view-profile-btn"
                                variant="outline-primary"
                                onClick={() => setShowPopOver(false)}
                            >
                                View Profile
                            </Button>
                        </Link>
                    </div>
                </ListGroupItem>
                <ListGroup.Item>
                    <h5>Account</h5>
                    <p>Settings &amp; Privacy</p>
                    <p>Help</p>
                    <p>Language</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Manage</h5>
                    <p>Posts &amp; Activity</p>
                    <p>Job Posting Account</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Sign Out</p>
                </ListGroup.Item>
            </Popover.Content>

        </Popover>
    )
    return (
        <>
            <Navbar className="py-2" id='navbar-body' sticky='top' bg='white' expand='lg'>
                <Container>
                    <Link to='/'>
                        <img
                            className="navbar-icon-container d-none d-md-block"
                            id='navbar-logo'
                            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                            alt='linkedin-logo'
                        />
                    </Link>
                    <Form inline className="d-none d-lg-block">
                        <Form.Group id="navbar-search-container">
                            <InputGroup.Prepend>
                                <Search id="navbar-search-icon" className="mx-2" size={16} />
                            </InputGroup.Prepend>
                            <FormControl
                                id="form-control-search-form-control"
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                        </Form.Group>
                    </Form>
                    <div id='navbar-center' className="ml-auto">
                        <Link to='/'>
                            <div className="navbar-icon-container mt-2 text-center">
                                <HouseDoorFill size={22} className="navbar-icon" />
                                Home
                            </div>
                        </Link>
                        <div className="navbar-icon-container mt-2 text-center">
                            <PeopleFill size={22} className="navbar-icon" />
                            My Network
                        </div>
                        <div className="navbar-icon-container mt-2 text-center">
                            <BriefcaseFill size={22} className="navbar-icon" />
                            Jobs
                        </div>
                        <div className="navbar-icon-container mt-2 text-center">
                            <ChatDotsFill size={22} className="navbar-icon" />
                            Messaging
                        </div>
                        <div className="navbar-icon-container mt-2 text-center">
                            <BellFill size={22} className="navbar-icon" />
                            Notifications
                        </div>
                        <OverlayTrigger
                            trigger='click'
                            rootClose
                            placement="bottom"
                            overlay={mePopover}
                            show={showPopOver}
                        >
                            <div className="navbar-icon-container text-center"
                                id='shrinking-btn'
                                onMouseUp={() => setShowPopOver(!showPopOver)}>
                                <img
                                    className="navbar-profile-pic"
                                    src={userProfile.image}
                                    alt="profile"
                                />
                                <div>
                                    Me <CaretDownFill />
                                </div>
                            </div>

                        </OverlayTrigger>
                        <div className="navbar-icon-container navbar-right-section text-center">
                            <Grid3x3GapFill size={22} />
                            <div>
                                Work <CaretDownFill />
                            </div>
                        </div>
                        <Link to="/premium">
                            <div
                                id="try-premium"
                                className="d-none d-lg-block text-center mt-2"
                            >
                                Try Premium for <br />
                                free
                            </div>
                        </Link>



                    </div>

                </Container>

            </Navbar>
        </>
    )

}
export default MyNav;
