#!/bin/bash

# Set default port if not provided
PORT=${PORT:-3000}

echo "Starting server on port $PORT"
echo "Serving files from build directory"

# Start the server
npx serve build -p $PORT --single --cors
