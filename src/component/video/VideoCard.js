import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const VideoCard = ({ title, description, videoUrl, likes, publishDate }) => {
    return (
        <Card className="video-card">
            <CardMedia
                component="img"
                height="140"
                image={videoUrl}
                alt={title}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Box className="video-info" mt={2}>
                    <Box display="flex" alignItems="center">
                        <FavoriteIcon color="error" />
                        <Typography variant="body2" color="text.secondary" ml={1}>
                        
                        {likes}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {new Date(publishDate).toLocaleDateString()}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

VideoCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    publishDate: PropTypes.string.isRequired,
};

export default VideoCard;