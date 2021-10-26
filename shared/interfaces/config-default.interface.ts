import {ProjectInterface} from "./project.interface";
import {ProfileInterface} from "./profile.interface";

export default interface Config {
    formSpreeId: string;
    profiles: ProfileInterface;
    images: string[];
    languages: string[];
    frameworks: string[];
    workExamples: string[];
    projects: ProjectInterface[]
}