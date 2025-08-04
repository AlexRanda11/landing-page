import { Button } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function SeeMore({text, url}: {text: string, url: string}) {
    const navigate = useNavigate();

    return (
        <Button
            endIcon={<KeyboardArrowRight />}
            variant="outlined"
            size="large"
            sx={{ alignSelf: 'flex-end', marginTop: 2 }}
            onClick={() => {navigate(url)}}
        >{text}</Button>
    )
}