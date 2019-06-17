import { sendNoInteract } from "../../../renderer/utils/communication";
import { GEN_SCM_TRACE } from "../constants/communicationEnums";
import { SCHEME } from "../../../common/languages.js";

export default async function generateDebugTrace(code, _, setup_code = "", working_directory = "") {
    return JSON.parse(await sendNoInteract({
        handler: SCHEME,
        type: GEN_SCM_TRACE,
        setup_code,
        code,
        working_directory,
    }));
}
