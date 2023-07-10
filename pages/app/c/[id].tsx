import { Avatar, Badge, Box, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { GetServerSidePropsContext } from "next";
import { useEffect } from "react";
import AppLayout from "../../../components/AppLayout/AppLayout";
import { makeCourse } from "../../../lib/applets/global/course";
import { activeAppletAtom } from "../../../lib/global.atom";
import { nameInitials } from "../../../lib/utils/nameInitials";

interface CoursePageProps {
    id: string;
}

const CoursePage: React.FC<CoursePageProps> = (props) => {
    const [, setActiveApplet] = useAtom(activeAppletAtom);
    /* TODO: change with fetched course instead */

    useEffect(() => {
        setActiveApplet(
            makeCourse({
                courseId: "CS S-50",
                courseName: "Introduction to Computer Science",
                emoji: "💻",
                id: "ckhswen5bovnwo2322nsdbej12",
                admin: {
                    name: "Ada Lovelace",
                },
            }),
        );
    }, [setActiveApplet]);

    return (
        <AppLayout>
            <Box
                m={0}
                className="flex h-96 w-full items-end justify-start bg-green-900 px-9 py-5"
                sx={{
                    backgroundSize: "cover",
                    backgroundImage:
                        "linear-gradient(transparent, rgba(20,20,20,0.7) 90%), url('https://images.unsplash.com/photo-1579862325998-44e49ab74138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80')",
                }}
            >
                <div className="flex w-full items-end justify-between">
                    <div className="flex gap-6">
                        <div className="text-[64px]">🤖</div>
                        <div className="flex flex-col gap-2">
                            <Text
                                size="sm"
                                fw="bolder"
                                sx={(theme) => {
                                    return {
                                        color: theme.fn.rgba(
                                            theme.white,
                                            0.75,
                                        ),
                                    };
                                }}
                            >
                                WORKSPACE
                            </Text>
                            <Text
                                className="text-5xl"
                                c="white"
                                fw="bold"
                            >
                                <span className="pr-4">CS50</span>
                                <Badge variant="light">Course</Badge>
                            </Text>
                            <Text
                                size="lg"
                                sx={(theme) => {
                                    return {
                                        color: theme.fn.rgba(
                                            theme.white,
                                            0.75,
                                        ),
                                    };
                                }}
                            >
                                CS50: Introduction to Computer Science
                            </Text>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 pb-2">
                        <Avatar size={32} radius={999} variant="filled">
                            {nameInitials("David Malan")}
                        </Avatar>
                        <div>
                            <Text
                                size="sm"
                                lh={1}
                                sx={(theme) => {
                                    return {
                                        color: theme.fn.rgba(
                                            theme.white,
                                            0.75,
                                        ),
                                    };
                                }}
                            >
                                from
                            </Text>
                            <p className="text-white m-0 text-xl font-semibold">
                                David J. Malan
                            </p>
                        </div>
                    </div>
                </div>
            </Box>
        </AppLayout>
    );
};

export const getServerSideProps = async (
    context: GetServerSidePropsContext,
) => {
    const { id } = context.query;
    return {
        props: {
            appletId: id as string,
        },
    };
};

export default CoursePage;

