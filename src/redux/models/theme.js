
export const lightTheme = {
    // Fonts
    primaryFont: 'Source Sans Pro, sans-serif',
    secondaryFont: 'Source Sans Pro, serif',
    
    bgColor : "#FDFDFD",  // Closer to white for a cleaner look
    
    // Colors
    headerColor: '#1A1A1A',      // Slightly darker for contrast against the lighter background
    secondaryColor: '#273747',   // Adjusted for consistency
    textColor: '#E9E9E9',        // Darker gray for better readability against the near-white background
    secondaryTextColor: '#7c7c7c',   // Adjusted for better contrast
    
    botBubbleColor: '#EFEFEF',   // Adjusted for distinction against the lighter background
    userBubbleColor: '#F1F1F1',  // Adjusted for distinction against the lighter background
    botBubbleTextColor: '#1A1A1A',   // Consistent with header color
    userBubbleTextColor: '#1A1A1A',  // Consistent with header color
    
    inputBackgroundColor: '#FDFDFD',  // Adjusted for better distinction against the lighter background
    inputTextColor : "#1A1A1A",       // Consistent with header colors// White for contrast
    linkColor: '#004a91',             // Adjusted for a more professional look
    loadingColors: ['#2673a0', '#b83027', '#d66f1e', '#239451'],  // Adjusted for harmony with the new theme

    // ... add other theme properties as needed
};


export const darkTheme = {
    // Fonts
    primaryFont: 'Source Sans Pro, sans-serif',
    secondaryFont: 'Source Sans Pro, serif',

    bgColor: '#1A1A1D',
    // Colors
    headerColor: '#FEFEFE',          // Primary UI elements and highlights
    secondaryColor: '#4A4A4D',        // Secondary UI elements
    textColor: '#1A1A1D',             // Primary text color
    secondaryTextColor: '#A0A0A3',   // Secondary text color (e.g., placeholders, subtitles)

    botBubbleColor: '#2D2D30',       // Background color for bot messages
    userBubbleColor: '#333336',      // Background color for user messages
    botBubbleTextColor: '#E0E0E1',   // Text color for bot messages
    userBubbleTextColor: '#E0E0E1',  // Text color for user messages

   // Background color for the chat header
    inputBackgroundColor: '#232326',
    inputTextColor: '#E0E0E1',       // Text color for the input area
    sendButtonColor: '#00000000',      // Send button color
    sendButtonTextColor: '#EFEFEF',  // Send button text color
    linkColor: '#1E90FF',            // Color for links
    loadingColors: ['#70A1FF', '#E55039', '#F5B041', '#58D68D'],

    // ... add other theme properties as needed
};


export const initialTheme = lightTheme;
