import { SpotlightAction } from "@mantine/spotlight";
import Router from "next/router";
import { OverrideField } from "../../utils/types";

export interface CourseBuilder {
    id: string;
    courseId: string;
    courseName: string;
    emoji: string;
    admin: {
        name: string;
    };
}

export type Course = OverrideField<
    SpotlightAction & CourseBuilder,
    {
        route: string;
        isCourse: boolean;
    }
>;

export const makeCourse = (builder: CourseBuilder): Course => {
    const route = `/app/c/${builder.id}`;
    return {
        id: builder.id,
        route,
        title: builder.courseName,
        group: "Courses",
        icon: builder.emoji,
        onTrigger: () => {
            Router.push(route);
        },
        admin: {
            name: builder.admin.name,
        },
        isCourse: true,
        courseId: builder.courseId,
        courseName: builder.courseName,
        emoji: builder.emoji,
    };
};
