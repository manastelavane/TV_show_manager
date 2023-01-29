/* eslint-disable */
import React, { useState } from 'react';
import {
  App,
  BinIcon,
  CardContainer,
  EditIcon,
  Icons,
  RatingCont,
  Review,
  Title,
} from './CardElement';
import Rating from '@mui/material/Rating';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';

import Modal from '@mui/material/Modal';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteshow, updateshow } from '../../../actions/show';
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
  '& .MuiButton-root': { mt: 1, mb: 1, width: '18ch' },
};
const Card = ({ show }) => {
  const dispatch = useDispatch();
  const [currentshow, setcurrentshow] = useState({
    title: show.title,
    streamingApp: show.streamingApp,
    rating: show.rating,
    review: show.review,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const submitHandler = async () => {
    handleClose();
    dispatch(updateshow(currentshow, show._id));
  };
  const handleDelete = async () => {
    dispatch(deleteshow(show._id));
  };
  return (
    <CardContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {currentshow.title}
          </Typography>
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
            Update
          </Button>
        </Box>
      </Modal>
      <Icons>
        <EditIcon title="edit" onClick={handleOpen}>
          <MdModeEditOutline />
        </EditIcon>
        <BinIcon title="delete" onClick={handleDelete}>
          <MdDelete />
        </BinIcon>
      </Icons>
      <Title>{show.title}</Title>
      <App>
        <i>{show.streamingApp}</i>
      </App>
      <RatingCont>
        <Rating name="read-only" value={show.rating} readOnly />
      </RatingCont>
      <Review>{show.review}</Review>
    </CardContainer>
  );
};

export default Card;
