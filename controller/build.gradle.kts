plugins {
    kotlin("jvm") version "1.4.10"
}

group = "dev.nathanpb"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
    maven(url = "https://jitpack.io")
}

dependencies {
    implementation(kotlin("stdlib"))
    implementation("io.ktor:ktor-server-netty:1.4.1")
    implementation("com.google.firebase:firebase-admin:7.0.0")
    implementation("com.github.NathanPB:BootingBits:1.0-SNAPSHOT")
    implementation("org.litote.kmongo:kmongo-coroutine-serialization:4.1.2")
    implementation("org.slf4j:slf4j-simple:1.7.30")
}

tasks.withType<Jar> {
    manifest {
        attributes["Main-Class"] = "MainKt"
    }
    configurations["compileClasspath"].forEach { file: File ->
        from(zipTree(file.absoluteFile))
    }
}

tasks.withType(org.jetbrains.kotlin.gradle.tasks.KotlinCompile::class).all {
    kotlinOptions {
        jvmTarget = "14"
    }
}
