import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { logEvent } from "../utils/logger";

export default function UrlShortener() {
  const [urls, setUrls] = useState([{ longUrl: "", validity: "", shortcode: "" }]);

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const handleSubmit = () => {
    urls.forEach((urlData, idx) => {
      // simulate backend call
      const short = urlData.shortcode || Math.random().toString(36).substr(2, 5);
      logEvent("URL_SHORTENED", {
        original: urlData.longUrl,
        short,
        validity: urlData.validity || 30
      });
    });
    alert("Shortened URLs logged!");
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      {urls.map((item, i) => (
        <Box key={i} mb={2}>
          <TextField
            label="Long URL"
            fullWidth
            value={item.longUrl}
            onChange={(e) => handleChange(i, "longUrl", e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
            label="Validity (minutes)"
            fullWidth
            value={item.validity}
            onChange={(e) => handleChange(i, "validity", e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
            label="Preferred Shortcode"
            fullWidth
            value={item.shortcode}
            onChange={(e) => handleChange(i, "shortcode", e.target.value)}
            sx={{ mb: 2 }}
          />
        </Box>
      ))}
      <Button
        variant="contained"
        onClick={() => urls.length < 5 && setUrls([...urls, { longUrl: "", validity: "", shortcode: "" }])}
        sx={{ mr: 2 }}
      >
        Add URL
      </Button>
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Shorten URLs
      </Button>
    </Box>
  );
}
