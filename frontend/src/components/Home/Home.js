import React, { useEffect, useState } from 'react';
import {
    Navbar,
    SearchInput,
    Logo,
    HomeContainer,
    ShowContainer,
    Btn
} from './HomeElement';
import { MdOutlineMonitor } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { createshow, getshows } from '../../actions/show';
import Card from './Card/Card';
import {
    Box,
    Button,
    Modal,
    Rating,
    TextField,
    Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
    '& .MuiTextField-root': { mt: 1, mb: 1, width: '25ch' },
    '& .MuiTypography-root': { mt: 1, mb: 1, width: '25ch' },
    '& .MuiRating-root': { mt: 1, mb: 1, width: '25ch' },
    '& .MuiButton-root': { mt: 1, mb: 1, width: '18ch' }
};
const initialstate = {
    title: '',
    streamingApp: '',
    rating: 0,
    review: ''
};

const Home = () => {
    let shows = [];
    const navigate = useNavigate();
    shows = useSelector((state) => state.show?.shows);
    const user = localStorage.getItem('profile');
    const [open, setOpen] = useState(false);
    const [term, setTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [currentshow, setcurrentshow] = useState(initialstate);
    const dispatch = useDispatch();
    const submitHandler = () => {
        handleClose();
        dispatch(createshow(currentshow));
        setcurrentshow(initialstate);
    };
    useEffect(() => {
        if (term !== '') {
            const newList = shows.filter((show) => {
                return Object.values(show)
                    .join(' ')
                    .toLowerCase()
                    .includes(term.toLowerCase());
            });
            setSearchResult(newList);
        } else {
            setSearchResult(shows);
        }
    }, [shows, term]);
    useEffect(() => {
        dispatch(getshows());
    }, [dispatch]);
    if (!user) {
        navigate('/');
        return;
    }
    return (
        <div>
            <Navbar>
                <Logo>
                    <MdOutlineMonitor style={{ color: 'white' }} />
                </Logo>
                <SearchInput
                    placeholder="🔎    Search for a your shows..."
                    type="text"
                    onChange={(e) => setTerm(e.target.value)}
                ></SearchInput>
            </Navbar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
            Create TV Show
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={currentshow.title}
                        onChange={(e) =>
                            setcurrentshow({ ...currentshow, title: e.target.value })
                        }
                    />
                    <TextField
                        id="outlined-basic"
                        label="Streaming App"
                        variant="outlined"
                        fullWidth
                        value={currentshow.streamingApp}
                        onChange={(e) =>
                            setcurrentshow({ ...currentshow, streamingApp: e.target.value })
                        }
                    />
                    <Typography id="modal-modal-title" component="p">
            Rating{' '}
                        <Rating
                            name="simple-controlled"
                            value={currentshow.rating}
                            onChange={(event, newValue) => {
                                setcurrentshow({ ...currentshow, rating: newValue });
                            }}
                        />
                    </Typography>

                    <TextField
                        id="outlined-basic"
                        label="Review"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        value={currentshow.review}
                        onChange={(e) =>
                            setcurrentshow({ ...currentshow, review: e.target.value })
                        }
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        onClick={submitHandler}
                    >
            Submit
                    </Button>
                </Box>
            </Modal>
            <Btn onClick={handleOpen}>+</Btn>
            <div>
                <HomeContainer>
                    <ShowContainer>
                        {shows && shows?.length !== 0 && term.length === 0
                            ? shows?.map((show) => <Card key={show._id} show={show} />)
                            : searchResult?.map((show) => (
                                <Card key={show._id} show={show} />
                            ))}
                    </ShowContainer>
                </HomeContainer>
            </div>
        </div>
    );
};

export default Home;
