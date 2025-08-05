import { Box, Typography } from "@mui/material";

export default function Stats() {
  const logs = JSON.parse(localStorage.getItem("logs") || "[]");

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Shortened URL Stats</Typography>
      {logs.map((log, i) => (
        <Box key={i} mb={2} p={2} border="1px solid #ccc">
          <Typography>Event: {log.event}</Typography>
          <Typography>Original: {log.data.original}</Typography>
          <Typography>Short: {log.data.short}</Typography>
          <Typography>Validity: {log.data.validity} mins</Typography>
          <Typography>Time: {log.timestamp}</Typography>
        </Box>
      ))}
    </Box>
  );
}
