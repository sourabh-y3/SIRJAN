import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  CircularProgress,
  IconButton,
  Grid,
} from '@mui/material';
import {
  Mic as MicIcon,
  Stop as StopIcon,
  PlayArrow as PlayIcon,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';

const SkillQuest = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [currentLesson, setCurrentLesson] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window) {
      window.SpeechRecognition = window.webkitSpeechRecognition;
    } else if ('SpeechRecognition' in window) {
      window.SpeechRecognition = window.SpeechRecognition;
    }

    // Load current lesson
    // This would typically come from an API call
    setCurrentLesson({
      id: 1,
      title: 'Introduction to Digital Skills',
      audioUrl: '/lessons/lesson1.mp3',
      transcript: 'Welcome to your first lesson on digital skills...',
    });
  }, []);

  const startRecording = () => {
    if (window.SpeechRecognition) {
      const recognition = new window.SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');

        setTranscript(transcript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
      };

      recognition.start();
      setIsRecording(true);
    } else {
      console.error('Speech recognition not supported');
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Here you would typically send the transcript to the backend
    console.log('Final transcript:', transcript);
  };

  const playLesson = () => {
    if (currentLesson?.audioUrl) {
      const audio = new Audio(currentLesson.audioUrl);
      audio.play();
      setIsPlaying(true);
      audio.onended = () => setIsPlaying(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Skill Quest
      </Typography>

      {currentLesson ? (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {currentLesson.title}
                </Typography>
                <Box sx={{ my: 2 }}>
                  <IconButton
                    color="primary"
                    onClick={playLesson}
                    disabled={isPlaying}
                  >
                    <PlayIcon />
                  </IconButton>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {currentLesson.transcript}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Voice Response
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                  <IconButton
                    color={isRecording ? 'secondary' : 'primary'}
                    onClick={isRecording ? stopRecording : startRecording}
                    size="large"
                  >
                    {isRecording ? <StopIcon /> : <MicIcon />}
                  </IconButton>
                </Box>
                {transcript && (
                  <Typography variant="body2" color="text.secondary">
                    {transcript}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
};

export default SkillQuest; 