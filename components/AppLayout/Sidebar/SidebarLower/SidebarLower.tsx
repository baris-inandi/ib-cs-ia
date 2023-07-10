import { useRouter } from "next/router";
import {
    Course,
    makeCourse,
} from "../../../../lib/applets/global/course";
import { Style } from "../../../../lib/utils/types";
import SidebarItem from "../SidebarItem/SidebarItem";
import SidebarLabel from "../SidebarLabel/SidebarLabel";

interface Props {
    section: any;
    classes: Style;
}

const testCourses: Array<Course> = [
    makeCourse({
        courseId: "CHEM S-101",
        courseName: "Chemistry",
        emoji: "🧪",
        id: "sdgsfjsnx9enwnfspnvs238sm",
        admin: {
            name: "Ada Lovelace",
        },
    }),
    makeCourse({
        courseId: "CS S-50",
        courseName: "Introduction to Computer Science",
        emoji: "💻",
        id: "ckhswen5bovnwo2322nsdbej12",
        admin: {
            name: "Ada Lovelace",
        },
    }),
    makeCourse({
        courseId: "MATH-101",
        courseName: "Calculus 1",
        emoji: "📈",
        id: "skd9nm2bd9nxk02bmspssdg2sb23",
        admin: {
            name: "Ada Lovelace",
        },
    }),
    makeCourse({
        courseId: "BIO S-101",
        courseName: "Biology",
        emoji: "🧬",
        id: "nd0nw93jhk9snsdjxbbbwpo3",
        admin: {
            name: "Ada Lovelace",
        },
    }),
];

const SidebarLower: React.FC<Props> = (props) => {
    const router = useRouter();

    return (
        <props.section className={props.classes.section}>
            <div className="px-5 pb-12">
                <SidebarLabel text="Courses" />
                {testCourses.map((course, index) => {
                    return (
                        <SidebarItem
                            key={index}
                            classes={props.classes}
                            active={router.asPath === course.route}
                            appletOrCourse={course}
                        />
                    );
                })}
            </div>
        </props.section>
    );
};

export default SidebarLower;

