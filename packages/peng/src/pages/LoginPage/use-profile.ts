import { KunUser } from "kun-shared/built/fetch";
import {useLocalStorage} from "react-use";
import {CONST_SOME} from "./LoginPage";

export function useProfile (): {profile ?: KunUser, setProfile: (value ?: KunUser) => void} {
    const [profile, setProfile]  = useLocalStorage(CONST_SOME, undefined , {
        raw: false,
        serializer: (value: KunUser) => JSON.stringify(value),
        deserializer: (value: string) => JSON.parse(value),
    });

    return {
        profile,
        setProfile
    }
}