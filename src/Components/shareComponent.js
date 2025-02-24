

import React, { useState, useEffect } from 'react';
import {
  Modal, Box, IconButton, Typography, List, ListItem, ListItemIcon,
  ListItemText, Snackbar, SnackbarContent, Stack
} from '@mui/material';
import {
  EmailShareButton, FacebookShareButton, TwitterShareButton,
  TelegramShareButton, LinkedinShareButton, WhatsappShareButton,
  RedditShareButton
} from 'react-share';

import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RedditIcon from '@mui/icons-material/Reddit';
import CheckIcon from '@mui/icons-material/Check';

const SocialShareModal = ({ openFromCard, setOpenFromCard }) => { 
  const [open, setOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href || "");
    }
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setSnackbarOpen(true);
    }).catch(() => {
      console.log("Failed to copy");
    });
  };
  const handleClose = () => setOpenFromCard(false);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const socialIcons = [
    { icon: <LinkIcon />, label: "Copy link", onClick: handleCopyLink },
    { component: EmailShareButton, icon: <EmailIcon />, label: "Email" },
    { component: FacebookShareButton, icon: <FacebookIcon />, label: "Facebook" },
    { component: TwitterShareButton, icon: <TwitterIcon />, label: "X" },
    { component: TelegramShareButton, icon: <TelegramIcon />, label: "Telegram" },
    { component: LinkedinShareButton, icon: <LinkedInIcon />, label: "LinkedIn" },
    { component: WhatsappShareButton, icon: <WhatsAppIcon />, label: "Whatsapp" },
    { component: RedditShareButton, icon: <RedditIcon />, label: "Reddit" }
  ];

  return (
    <> <Modal open={openFromCard} onClose={handleClose}>

      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)', width: 300,
        bgcolor: 'background.paper', boxShadow: 24, p: 4,
        borderRadius: '8px'
      }}>
        <Typography variant="h6">Share options</Typography>
        <List>
          {socialIcons.map((social, index) => {
            if (social.label === 'Copy link') {
              return (
                <ListItem button key={index} onClick={social.onClick}>
                  <ListItemIcon>{social.icon}</ListItemIcon>
                  <ListItemText primary={social.label} />
                </ListItem>
              );
            } else {
              const ShareButtonComponent = social.component;
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    <ShareButtonComponent url={currentUrl}>
                      {social.icon}
                    </ShareButtonComponent>
                  </ListItemIcon>
                  <ListItemText primary={social.label} />
                </ListItem>
              );
            }
          })}
        </List>
      </Box>
    </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        action={
          <IconButton onClick={handleSnackbarClose} color="inherit">
            <CheckIcon />
          </IconButton>
        }
      >
        <SnackbarContent
          sx={{ bgcolor: 'success.main', color: 'white' }}
          message="Link copied to clipboard!"
        />
      </Snackbar></>


  );
};

export default SocialShareModal;