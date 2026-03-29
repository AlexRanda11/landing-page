import { Button } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

export default function SeeMore({text, url}: {text: string, url: string}) {
    return (
        <Button
            endIcon={<KeyboardArrowRight />}
            variant="outlined"
            size="large"
            sx={{ alignSelf: 'flex-end', marginTop: 2 }}
            onClick={() => {window.open(url)}}
        >{text}</Button>
    )
}