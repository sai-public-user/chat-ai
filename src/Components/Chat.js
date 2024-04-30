import { SendSharp } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { drawerWidth } from "./Sidebar";
import moment from "moment";

export function ChatInput({ onSend }) {
  const [message, setMessage] = useState();

  const sendMessage = () => {
    onSend && onSend(message, moment().toISOString());
  };

  const onKeyPress = (e) => {
    if (Number(e.keyCode) === 13) {
      sendMessage();
    }
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <Box
      position="absolute"
      sx={{
        bottom: "20px",
        width: { sm: "100vw", md: `calc(100vw - ${drawerWidth}px - 3rem)` },
      }}
    >
      <TextField
        label="Ask a Question"
        fullWidth
        onKeyDown={onKeyPress}
        onChange={handleChange}
        value={message}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start" onClick={sendMessage}>
              <SendSharp />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export function ChatContainer({}) {
  return (
    <Box sx={{ height: "calc(100% - 144px)", overflow: "auto" }} mt={4}>
      {/* <>
        "Skip to main content Stack Overflow About Products For Teams Search…
        Home Questions Tags Users Companies LABS Discussions COLLECTIVES
        Communities for your favorite technologies. Explore all Collectives
        TEAMS Ask questions, find answers and collaborate at work with Stack
        Overflow for Teams. How to get the TextField value when enter key is
        pressed in React? Asked 7 years ago Modified 1 year, 3 months ago Viewed
        215k times 129 I want to pass TextField values when user press enter key
        from keyboard. In onChange() event, I am getting the value of the
        textbox, but How to get this value when enter key is pressed ? Code:
        import TextField from 'material-ui/TextField';
        javascriptreactjsmaterial-ui Share Improve this question Follow edited
        Nov 10, 2021 at 5:06 NearHuscarl's user avatar NearHuscarl 75.9k2121
        gold badges300300 silver badges265265 bronze badges asked Apr 13, 2017
        at 5:15 Soumya Behera's user avatar Soumya Behera 2,42244 gold
        badges1616 silver badges2525 bronze badges 1 where is your codes to show
        you tried? – repzero Apr 13, 2017 at 5:17 It seems like mui prevents use
        of native browser functionality, forcing manual reimplementation using
        somewhat lower level code (manually checking keypresses). Am I missing
        something? (Honest question, I'm new to mui and trying to reorient my
        thinking.) – ballenf Mar 13, 2019 at 17:53 Add a comment 5 Answers
        Sorted by: Highest score (default) 147 Use onKeyDown event, and inside
        that check the key code of the key pressed by user. Key code of Enter
        key is 13, check the code and put the logic there. Check this example:
        Expand snippet Note: Replace the input element by Material-Ui TextField
        and define the other properties also. Share Improve this answer Follow
        edited Apr 13, 2017 at 6:16 answered Apr 13, 2017 at 6:11 Mayank
        Shukla's user avatar Mayank Shukla 103k1919 gold badges160160 silver
        badges143143 bronze badges 7 KeyboardEvent.keyCode is deprecated, maybe
        we should use KeyboardEvent.key or KeyboardEvent.code instead ? – Tina
        Chen Jul 17, 2018 at 1:27 14 Use e.key === "Enter" instead – Gabriel
        Linassi Oct 9, 2020 at 0:35 Add a comment 87 Adding onKeyPress will work
        onChange in Text Field. Share Improve this answer Follow edited Jan 9,
        2023 at 12:34 Liran H's user avatar Liran H 9,87188 gold badges4444
        silver badges5454 bronze badges answered Sep 12, 2017 at 9:17 sunaina
        kotekar's user avatar sunaina kotekar 1,02388 silver badges77 bronze
        badges 9 This doesn't explain how to get the value of the target
        TextField in the callback specified for onKeyPress. – Neil Jun 4, 2019
        at 23:42 how do you actually get the value of the TextFiled? – PLO Jan
        2, 2020 at 22:22 control the component and useState for value – Nicholas
        Gentile Feb 9, 2021 at 4:50 onKeyPress happens before the field's value
        is actually set. Crap, i know. You can get the value of the textfield
        with the onChange prop... onChange=
        {(ev) => console.log(ev.target.value)} – chichilatte Apr 26, 2021 at
        16:11 @Neil, @PLO - ev.target.value – vsync Feb 25, 2022 at 21:39 Show 2
        more comments 13 You can use e.target.value to get the current value of
        the input element if you're using uncontrolled mode. Live Demo
        Codesandbox Demo Share Improve this answer Follow edited Feb 26, 2022 at
        6:51 answered Nov 10, 2021 at 5:05 NearHuscarl's user avatar NearHuscarl
        75.9k2121 gold badges300300 silver badges265265 bronze badges This has
        nothing to do with MUI v5. This is regular DOM event which any version
        of the TextField component exposes to developers. – vsync Feb 25, 2022
        at 21:40 @vsync sorry for the confusion, I've updated this answer.. –
        NearHuscarl Feb 26, 2022 at 6:51 But why did you give an exact same
        answer (recently) when the same ones were given here years ago? – vsync
        Feb 26, 2022 at 10:09 your demo isn't working – elad silver Jul 8, 2022
        at 15:09 Add a comment 2 Next time, Please try providing some code.
        Share Improve this answer Follow answered Apr 13, 2017 at 5:21 manish's
        user avatar manish 1,44888 silver badges1313 bronze badges 1 Please ask
        the OP for what they have tried before posting your own code. – Dhiraj
        Apr 13, 2017 at 5:22 1 why define enterKey and using memory when you can
        just write 13 in the if – amir hosein ahmadi Apr 15, 2019 at 13:27 10
        @amirhoseinahmadi Nobody cares about memory these days as much as
        writing clean and understandable code. I have prettier in place in my
        project which does not let me use any magic numbers. It enforces to use
        a const instead, to define what number is about. I would prefer to see
        enterKey than just 13 – Hafiz Temuri Nov 28, 2019 at 15:10 1 Next time,
        Please try providing some information about your code. – Patricio Vargas
        Jan 14, 2021 at 6:29 Add a comment Your Answer Sign up or log in Post as
        a guest Name Email Required, but never shown By clicking “Post Your
        Answer”, you agree to our terms of service and acknowledge you have read
        our privacy policy. Not the answer you're looking for? Browse other
        questions tagged javascriptreactjsmaterial-ui or ask your own question.
        The Overflow Blog Supporting the world’s most-used database engine
        through 2050 Net neutrality is in; TikTok and noncompetes are out
        Featured on Meta Testing a new version of Stack Overflow Jobs Pausing
        the 1-rep voting experiment on Stack Overflow: reflecting on the...
        Temporary policy: Generative AI (e.g., ChatGPT) is banned Linked 341 How
        to handle the `onKeyPress` event in ReactJS? 7 Material UI Input not
        detecting when enter key is pressed 0 Typing in a new option in MUI
        Autocomplete changes the previous option when Enter is pressed 1 How to
        create a counter that calculates the remaining characters? 0 going
        inside this method keyPress but I dont see any consoles printed Related
        0 Unable to Grab value from Textfield in React? 4 How to get input value
        of TextField from Material UI? 3 React: How to get values from
        Material-UI TextField components 0 Unable to get the input from a
        textfield in React 1 How to get value of an input text in reactjs
        version 16.13.1 0 How to get the value of input in Material-UI 1 get
        value from input on button click and enter key press react 3 How to get
        value from Material UI textfield after pressing enter? 2 How to get the
        TextField value with onclick button event React Material UI 1 Can't type
        in TextField Input from React Material-ui Hot Network Questions Help is
        needed with IC identification Is this the right way to shoot in the
        style of a Hollywood silent movie? Does Sola Scriptura imply that one
        should expect no personal spiritual experience of the Gospel? Is
        exhaustive-listing が here acting like a topic marker? Why doesn't b =
        a; f[a_] := b; f[2] return 2? Why is construction required in geometry?
        I want to show by simulation that the Wilcoxon test is more robust than
        the Student test for non-normally distributed data Inner voice when
        reading mathematics Storing a chandelier by suspending it from the walls
        Movie where three people get locked in a hotel Can a pilot tell a
        controller they don't need IFR clearance? How to deal with a possibly
        autistic colleague that seems to be fixated on me Why are random
        integers generated by multiplying by MAX_SAFE_INTEGER not evenly
        distributed between odd and even? Having a second bite of the data-apple
        without p-hacking What is it called when the root is omitted from a
        chord? Numbers reminding me of cities Why would solid rubber tubes be no
        good to some? Pattern Matching on Request Body for Routing an HTTP
        Request How to obtain meat when you have no hunters in the colony?
        Homemade salad dressing with raw garlic not safe? Non-noetherian schemes
        with noetherian underlying space (in the Zariski topology) What are the
        consequences or risks of signing a document with a future date? 19-year
        old me was into geography Does complete and separable Wasserstein space
        imply a complete base space? Question feed STACK OVERFLOW Questions Help
        PRODUCTS Teams Advertising Collectives Talent COMPANY About Press Work
        Here Legal Privacy Policy Terms of Service Contact Us Cookie Settings
        Cookie Policy STACK EXCHANGE NETWORK Technology Culture & recreation
        Life & arts Science Professional Business API Data Blog Facebook Twitter
        LinkedIn Instagram Site design / logo © 2024 Stack Exchange Inc; user
        contributions licensed under CC BY-SA. rev 2024.4.29.8372 By clicking
        “Accept all cookies”, you agree Stack Exchange can store cookies on your
        device and disclose information in accordance with our Cookie Policy.
        Accept all cookies Necessary cookies only Customize settings"
      </> */}
    </Box>
  );
}

export default function Chat({}) {
  const [questions, setQuestions] = useState(new Map());
  const [answers, setAnswers] = useState(new Map());

  return (
    <Box position="relative" sx={{ height: "100%" }}>
      <ChatContainer />
      <ChatInput onSend={() => console.info("handle new queston")} />
    </Box>
  );
}
