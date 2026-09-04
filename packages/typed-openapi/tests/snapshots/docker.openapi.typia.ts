
  import typia, { tags } from "typia";

// <Schemas>
export type Port = { IP?: string, PrivatePort: number, PublicPort?: number, Type: ("tcp" | "udp" | "sctp") };
export const isPort = ((input: unknown): input is Port => typia.createIs<Port>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "IP": 1, "PrivatePort": 1, "PublicPort": 1, "Type": 1 }, key)));
export const assertPort = typia.createAssert<Port>();
export const validatePort = typia.createValidate<Port>();

export type MountPoint = Partial<{ Type: ("bind" | "volume" | "tmpfs" | "npipe" | "cluster"), Name: string, Source: string, Destination: string, Driver: string, Mode: string, RW: boolean, Propagation: string }>;
export const isMountPoint = ((input: unknown): input is MountPoint => typia.createIs<MountPoint>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Type": 1, "Name": 1, "Source": 1, "Destination": 1, "Driver": 1, "Mode": 1, "RW": 1, "Propagation": 1 }, key)));
export const assertMountPoint = typia.createAssert<MountPoint>();
export const validateMountPoint = typia.createValidate<MountPoint>();

export type DeviceMapping = Partial<{ PathOnHost: string, PathInContainer: string, CgroupPermissions: string }>;
export const isDeviceMapping = ((input: unknown): input is DeviceMapping => typia.createIs<DeviceMapping>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "PathOnHost": 1, "PathInContainer": 1, "CgroupPermissions": 1 }, key)));
export const assertDeviceMapping = typia.createAssert<DeviceMapping>();
export const validateDeviceMapping = typia.createValidate<DeviceMapping>();

export type DeviceRequest = Partial<{ Driver: string, Count: number, DeviceIDs: Array<string>, Capabilities: Array<Array<string>>, Options: Record<string, string> }>;
export const isDeviceRequest = ((input: unknown): input is DeviceRequest => typia.createIs<DeviceRequest>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Driver": 1, "Count": 1, "DeviceIDs": 1, "Capabilities": 1, "Options": 1 }, key)));
export const assertDeviceRequest = typia.createAssert<DeviceRequest>();
export const validateDeviceRequest = typia.createValidate<DeviceRequest>();

export type ThrottleDevice = Partial<{ Path: string, Rate: number }>;
export const isThrottleDevice = ((input: unknown): input is ThrottleDevice => typia.createIs<ThrottleDevice>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Path": 1, "Rate": 1 }, key)));
export const assertThrottleDevice = typia.createAssert<ThrottleDevice>();
export const validateThrottleDevice = typia.createValidate<ThrottleDevice>();

export type Mount = Partial<{ Target: string, Source: string, Type: ("bind" | "volume" | "tmpfs" | "npipe" | "cluster"), ReadOnly: boolean, Consistency: string, BindOptions: Partial<{ Propagation: ("private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave"), NonRecursive: boolean, CreateMountpoint: boolean }>, VolumeOptions: Partial<{ NoCopy: boolean, Labels: Record<string, string>, DriverConfig: Partial<{ Name: string, Options: Record<string, string> }> }>, TmpfsOptions: Partial<{ SizeBytes: number, Mode: number }> }>;
export const isMount = ((input: unknown): input is Mount => typia.createIs<Mount>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Target": 1, "Source": 1, "Type": 1, "ReadOnly": 1, "Consistency": 1, "BindOptions": 1, "VolumeOptions": 1, "TmpfsOptions": 1 }, key)));
export const assertMount = typia.createAssert<Mount>();
export const validateMount = typia.createValidate<Mount>();

export type RestartPolicy = Partial<{ Name: ("" | "no" | "always" | "unless-stopped" | "on-failure"), MaximumRetryCount: number }>;
export const isRestartPolicy = ((input: unknown): input is RestartPolicy => typia.createIs<RestartPolicy>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "MaximumRetryCount": 1 }, key)));
export const assertRestartPolicy = typia.createAssert<RestartPolicy>();
export const validateRestartPolicy = typia.createValidate<RestartPolicy>();

export type Resources = Partial<{ CpuShares: number, Memory: number, CgroupParent: string, BlkioWeight: number, BlkioWeightDevice: Array<Partial<{ Path: string, Weight: number }>>, BlkioDeviceReadBps: Array<ThrottleDevice>, BlkioDeviceWriteBps: Array<ThrottleDevice>, BlkioDeviceReadIOps: Array<ThrottleDevice>, BlkioDeviceWriteIOps: Array<ThrottleDevice>, CpuPeriod: number, CpuQuota: number, CpuRealtimePeriod: number, CpuRealtimeRuntime: number, CpusetCpus: string, CpusetMems: string, Devices: Array<DeviceMapping>, DeviceCgroupRules: Array<string>, DeviceRequests: Array<DeviceRequest>, KernelMemoryTCP: number, MemoryReservation: number, MemorySwap: number, MemorySwappiness: number, NanoCpus: number, OomKillDisable: boolean, Init: (boolean | null), PidsLimit: (number | null), Ulimits: Array<Partial<{ Name: string, Soft: number, Hard: number }>>, CpuCount: number, CpuPercent: number, IOMaximumIOps: number, IOMaximumBandwidth: number }>;
export const isResources = ((input: unknown): input is Resources => typia.createIs<Resources>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "CpuShares": 1, "Memory": 1, "CgroupParent": 1, "BlkioWeight": 1, "BlkioWeightDevice": 1, "BlkioDeviceReadBps": 1, "BlkioDeviceWriteBps": 1, "BlkioDeviceReadIOps": 1, "BlkioDeviceWriteIOps": 1, "CpuPeriod": 1, "CpuQuota": 1, "CpuRealtimePeriod": 1, "CpuRealtimeRuntime": 1, "CpusetCpus": 1, "CpusetMems": 1, "Devices": 1, "DeviceCgroupRules": 1, "DeviceRequests": 1, "KernelMemoryTCP": 1, "MemoryReservation": 1, "MemorySwap": 1, "MemorySwappiness": 1, "NanoCpus": 1, "OomKillDisable": 1, "Init": 1, "PidsLimit": 1, "Ulimits": 1, "CpuCount": 1, "CpuPercent": 1, "IOMaximumIOps": 1, "IOMaximumBandwidth": 1 }, key)));
export const assertResources = typia.createAssert<Resources>();
export const validateResources = typia.createValidate<Resources>();

export type Limit = Partial<{ NanoCPUs: number, MemoryBytes: number, Pids: number }>;
export const isLimit = ((input: unknown): input is Limit => typia.createIs<Limit>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "NanoCPUs": 1, "MemoryBytes": 1, "Pids": 1 }, key)));
export const assertLimit = typia.createAssert<Limit>();
export const validateLimit = typia.createValidate<Limit>();

export type GenericResources = Array<Partial<{ NamedResourceSpec: Partial<{ Kind: string, Value: string }>, DiscreteResourceSpec: Partial<{ Kind: string, Value: number }> }>>;
export const isGenericResources = typia.createIs<GenericResources>();
export const assertGenericResources = typia.createAssert<GenericResources>();
export const validateGenericResources = typia.createValidate<GenericResources>();

export type ResourceObject = Partial<{ NanoCPUs: number, MemoryBytes: number, GenericResources: GenericResources }>;
export const isResourceObject = ((input: unknown): input is ResourceObject => typia.createIs<ResourceObject>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "NanoCPUs": 1, "MemoryBytes": 1, "GenericResources": 1 }, key)));
export const assertResourceObject = typia.createAssert<ResourceObject>();
export const validateResourceObject = typia.createValidate<ResourceObject>();

export type HealthConfig = Partial<{ Test: Array<string>, Interval: number, Timeout: number, Retries: number, StartPeriod: number }>;
export const isHealthConfig = ((input: unknown): input is HealthConfig => typia.createIs<HealthConfig>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Test": 1, "Interval": 1, "Timeout": 1, "Retries": 1, "StartPeriod": 1 }, key)));
export const assertHealthConfig = typia.createAssert<HealthConfig>();
export const validateHealthConfig = typia.createValidate<HealthConfig>();

export type HealthcheckResult = (Partial<{ Start: string, End: string, ExitCode: number, Output: string }> | null);
export const isHealthcheckResult = typia.createIs<HealthcheckResult>();
export const assertHealthcheckResult = typia.createAssert<HealthcheckResult>();
export const validateHealthcheckResult = typia.createValidate<HealthcheckResult>();

export type Health = (Partial<{ Status: ("none" | "starting" | "healthy" | "unhealthy"), FailingStreak: number, Log: Array<HealthcheckResult> }> | null);
export const isHealth = typia.createIs<Health>();
export const assertHealth = typia.createAssert<Health>();
export const validateHealth = typia.createValidate<Health>();

export type PortBinding = Partial<{ HostIp: string, HostPort: string }>;
export const isPortBinding = ((input: unknown): input is PortBinding => typia.createIs<PortBinding>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "HostIp": 1, "HostPort": 1 }, key)));
export const assertPortBinding = typia.createAssert<PortBinding>();
export const validatePortBinding = typia.createValidate<PortBinding>();

export type PortMap = Record<string, (Array<PortBinding> | null)>;
export const isPortMap = typia.createIs<PortMap>();
export const assertPortMap = typia.createAssert<PortMap>();
export const validatePortMap = typia.createValidate<PortMap>();

export type HostConfig = (Resources & Partial<{ Binds: Array<string>, ContainerIDFile: string, LogConfig: Partial<{ Type: ("json-file" | "syslog" | "journald" | "gelf" | "fluentd" | "awslogs" | "splunk" | "etwlogs" | "none"), Config: Record<string, string> }>, NetworkMode: string, PortBindings: PortMap, RestartPolicy: RestartPolicy, AutoRemove: boolean, VolumeDriver: string, VolumesFrom: Array<string>, Mounts: Array<Mount>, ConsoleSize: (Array<number> | null), Annotations: Record<string, string>, CapAdd: Array<string>, CapDrop: Array<string>, CgroupnsMode: ("private" | "host"), Dns: Array<string>, DnsOptions: Array<string>, DnsSearch: Array<string>, ExtraHosts: Array<string>, GroupAdd: Array<string>, IpcMode: string, Cgroup: string, Links: Array<string>, OomScoreAdj: number, PidMode: string, Privileged: boolean, PublishAllPorts: boolean, ReadonlyRootfs: boolean, SecurityOpt: Array<string>, StorageOpt: Record<string, string>, Tmpfs: Record<string, string>, UTSMode: string, UsernsMode: string, ShmSize: number, Sysctls: Record<string, string>, Runtime: string, Isolation: ("default" | "process" | "hyperv"), MaskedPaths: Array<string>, ReadonlyPaths: Array<string> }>);
export const isHostConfig = ((input: unknown): input is HostConfig => typia.createIs<HostConfig>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "CpuShares": 1, "Memory": 1, "CgroupParent": 1, "BlkioWeight": 1, "BlkioWeightDevice": 1, "BlkioDeviceReadBps": 1, "BlkioDeviceWriteBps": 1, "BlkioDeviceReadIOps": 1, "BlkioDeviceWriteIOps": 1, "CpuPeriod": 1, "CpuQuota": 1, "CpuRealtimePeriod": 1, "CpuRealtimeRuntime": 1, "CpusetCpus": 1, "CpusetMems": 1, "Devices": 1, "DeviceCgroupRules": 1, "DeviceRequests": 1, "KernelMemoryTCP": 1, "MemoryReservation": 1, "MemorySwap": 1, "MemorySwappiness": 1, "NanoCpus": 1, "OomKillDisable": 1, "Init": 1, "PidsLimit": 1, "Ulimits": 1, "CpuCount": 1, "CpuPercent": 1, "IOMaximumIOps": 1, "IOMaximumBandwidth": 1, "Binds": 1, "ContainerIDFile": 1, "LogConfig": 1, "NetworkMode": 1, "PortBindings": 1, "RestartPolicy": 1, "AutoRemove": 1, "VolumeDriver": 1, "VolumesFrom": 1, "Mounts": 1, "ConsoleSize": 1, "Annotations": 1, "CapAdd": 1, "CapDrop": 1, "CgroupnsMode": 1, "Dns": 1, "DnsOptions": 1, "DnsSearch": 1, "ExtraHosts": 1, "GroupAdd": 1, "IpcMode": 1, "Cgroup": 1, "Links": 1, "OomScoreAdj": 1, "PidMode": 1, "Privileged": 1, "PublishAllPorts": 1, "ReadonlyRootfs": 1, "SecurityOpt": 1, "StorageOpt": 1, "Tmpfs": 1, "UTSMode": 1, "UsernsMode": 1, "ShmSize": 1, "Sysctls": 1, "Runtime": 1, "Isolation": 1, "MaskedPaths": 1, "ReadonlyPaths": 1 }, key)));
export const assertHostConfig = typia.createAssert<HostConfig>();
export const validateHostConfig = typia.createValidate<HostConfig>();

export type ContainerConfig = Partial<{ Hostname: string, Domainname: string, User: string, AttachStdin: boolean, AttachStdout: boolean, AttachStderr: boolean, ExposedPorts: (Record<string, Partial<{  }>> | null), Tty: boolean, OpenStdin: boolean, StdinOnce: boolean, Env: Array<string>, Cmd: Array<string>, Healthcheck: HealthConfig, ArgsEscaped: (boolean | null), Image: string, Volumes: Record<string, Partial<{  }>>, WorkingDir: string, Entrypoint: Array<string>, NetworkDisabled: (boolean | null), MacAddress: (string | null), OnBuild: (Array<string> | null), Labels: Record<string, string>, StopSignal: (string | null), StopTimeout: (number | null), Shell: (Array<string> | null) }>;
export const isContainerConfig = ((input: unknown): input is ContainerConfig => typia.createIs<ContainerConfig>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Hostname": 1, "Domainname": 1, "User": 1, "AttachStdin": 1, "AttachStdout": 1, "AttachStderr": 1, "ExposedPorts": 1, "Tty": 1, "OpenStdin": 1, "StdinOnce": 1, "Env": 1, "Cmd": 1, "Healthcheck": 1, "ArgsEscaped": 1, "Image": 1, "Volumes": 1, "WorkingDir": 1, "Entrypoint": 1, "NetworkDisabled": 1, "MacAddress": 1, "OnBuild": 1, "Labels": 1, "StopSignal": 1, "StopTimeout": 1, "Shell": 1 }, key)));
export const assertContainerConfig = typia.createAssert<ContainerConfig>();
export const validateContainerConfig = typia.createValidate<ContainerConfig>();

export type EndpointIPAMConfig = (Partial<{ IPv4Address: string, IPv6Address: string, LinkLocalIPs: Array<string> }> | null);
export const isEndpointIPAMConfig = typia.createIs<EndpointIPAMConfig>();
export const assertEndpointIPAMConfig = typia.createAssert<EndpointIPAMConfig>();
export const validateEndpointIPAMConfig = typia.createValidate<EndpointIPAMConfig>();

export type EndpointSettings = Partial<{ IPAMConfig: EndpointIPAMConfig, Links: Array<string>, Aliases: Array<string>, NetworkID: string, EndpointID: string, Gateway: string, IPAddress: string, IPPrefixLen: number, IPv6Gateway: string, GlobalIPv6Address: string, GlobalIPv6PrefixLen: number, MacAddress: string, DriverOpts: (Record<string, string> | null) }>;
export const isEndpointSettings = ((input: unknown): input is EndpointSettings => typia.createIs<EndpointSettings>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "IPAMConfig": 1, "Links": 1, "Aliases": 1, "NetworkID": 1, "EndpointID": 1, "Gateway": 1, "IPAddress": 1, "IPPrefixLen": 1, "IPv6Gateway": 1, "GlobalIPv6Address": 1, "GlobalIPv6PrefixLen": 1, "MacAddress": 1, "DriverOpts": 1 }, key)));
export const assertEndpointSettings = typia.createAssert<EndpointSettings>();
export const validateEndpointSettings = typia.createValidate<EndpointSettings>();

export type NetworkingConfig = Partial<{ EndpointsConfig: Record<string, EndpointSettings> }>;
export const isNetworkingConfig = ((input: unknown): input is NetworkingConfig => typia.createIs<NetworkingConfig>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "EndpointsConfig": 1 }, key)));
export const assertNetworkingConfig = typia.createAssert<NetworkingConfig>();
export const validateNetworkingConfig = typia.createValidate<NetworkingConfig>();

export type Address = Partial<{ Addr: string, PrefixLen: number }>;
export const isAddress = ((input: unknown): input is Address => typia.createIs<Address>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Addr": 1, "PrefixLen": 1 }, key)));
export const assertAddress = typia.createAssert<Address>();
export const validateAddress = typia.createValidate<Address>();

export type NetworkSettings = Partial<{ Bridge: string, SandboxID: string, HairpinMode: boolean, LinkLocalIPv6Address: string, LinkLocalIPv6PrefixLen: number, Ports: PortMap, SandboxKey: string, SecondaryIPAddresses: (Array<Address> | null), SecondaryIPv6Addresses: (Array<Address> | null), EndpointID: string, Gateway: string, GlobalIPv6Address: string, GlobalIPv6PrefixLen: number, IPAddress: string, IPPrefixLen: number, IPv6Gateway: string, MacAddress: string, Networks: Record<string, EndpointSettings> }>;
export const isNetworkSettings = ((input: unknown): input is NetworkSettings => typia.createIs<NetworkSettings>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Bridge": 1, "SandboxID": 1, "HairpinMode": 1, "LinkLocalIPv6Address": 1, "LinkLocalIPv6PrefixLen": 1, "Ports": 1, "SandboxKey": 1, "SecondaryIPAddresses": 1, "SecondaryIPv6Addresses": 1, "EndpointID": 1, "Gateway": 1, "GlobalIPv6Address": 1, "GlobalIPv6PrefixLen": 1, "IPAddress": 1, "IPPrefixLen": 1, "IPv6Gateway": 1, "MacAddress": 1, "Networks": 1 }, key)));
export const assertNetworkSettings = typia.createAssert<NetworkSettings>();
export const validateNetworkSettings = typia.createValidate<NetworkSettings>();

export type GraphDriverData = { Name: string, Data: Record<string, string> };
export const isGraphDriverData = ((input: unknown): input is GraphDriverData => typia.createIs<GraphDriverData>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Data": 1 }, key)));
export const assertGraphDriverData = typia.createAssert<GraphDriverData>();
export const validateGraphDriverData = typia.createValidate<GraphDriverData>();

export type ChangeType = (0 | 1 | 2);
export const isChangeType = typia.createIs<ChangeType>();
export const assertChangeType = typia.createAssert<ChangeType>();
export const validateChangeType = typia.createValidate<ChangeType>();

export type FilesystemChange = { Path: string, Kind: ChangeType };
export const isFilesystemChange = ((input: unknown): input is FilesystemChange => typia.createIs<FilesystemChange>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Path": 1, "Kind": 1 }, key)));
export const assertFilesystemChange = typia.createAssert<FilesystemChange>();
export const validateFilesystemChange = typia.createValidate<FilesystemChange>();

export type ImageInspect = Partial<{ Id: string, RepoTags: Array<string>, RepoDigests: Array<string>, Parent: string, Comment: string, Created: string, Container: string, ContainerConfig: ContainerConfig, DockerVersion: string, Author: string, Config: ContainerConfig, Architecture: string, Variant: (string | null), Os: string, OsVersion: (string | null), Size: number, VirtualSize: number, GraphDriver: GraphDriverData, RootFS: { Type: string, Layers?: Array<string> }, Metadata: Partial<{ LastTagTime: (string | null) }> }>;
export const isImageInspect = ((input: unknown): input is ImageInspect => typia.createIs<ImageInspect>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "RepoTags": 1, "RepoDigests": 1, "Parent": 1, "Comment": 1, "Created": 1, "Container": 1, "ContainerConfig": 1, "DockerVersion": 1, "Author": 1, "Config": 1, "Architecture": 1, "Variant": 1, "Os": 1, "OsVersion": 1, "Size": 1, "VirtualSize": 1, "GraphDriver": 1, "RootFS": 1, "Metadata": 1 }, key)));
export const assertImageInspect = typia.createAssert<ImageInspect>();
export const validateImageInspect = typia.createValidate<ImageInspect>();

export type ImageSummary = { Id: string, ParentId: string, RepoTags: Array<string>, RepoDigests: Array<string>, Created: number, Size: number, SharedSize: number, VirtualSize?: number, Labels: Record<string, string>, Containers: number };
export const isImageSummary = ((input: unknown): input is ImageSummary => typia.createIs<ImageSummary>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "ParentId": 1, "RepoTags": 1, "RepoDigests": 1, "Created": 1, "Size": 1, "SharedSize": 1, "VirtualSize": 1, "Labels": 1, "Containers": 1 }, key)));
export const assertImageSummary = typia.createAssert<ImageSummary>();
export const validateImageSummary = typia.createValidate<ImageSummary>();

export type AuthConfig = Partial<{ username: string, password: string, email: string, serveraddress: string }>;
export const isAuthConfig = ((input: unknown): input is AuthConfig => typia.createIs<AuthConfig>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "username": 1, "password": 1, "email": 1, "serveraddress": 1 }, key)));
export const assertAuthConfig = typia.createAssert<AuthConfig>();
export const validateAuthConfig = typia.createValidate<AuthConfig>();

export type ProcessConfig = Partial<{ privileged: boolean, user: string, tty: boolean, entrypoint: string, arguments: Array<string> }>;
export const isProcessConfig = ((input: unknown): input is ProcessConfig => typia.createIs<ProcessConfig>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "privileged": 1, "user": 1, "tty": 1, "entrypoint": 1, "arguments": 1 }, key)));
export const assertProcessConfig = typia.createAssert<ProcessConfig>();
export const validateProcessConfig = typia.createValidate<ProcessConfig>();

export type ObjectVersion = Partial<{ Index: number }>;
export const isObjectVersion = ((input: unknown): input is ObjectVersion => typia.createIs<ObjectVersion>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Index": 1 }, key)));
export const assertObjectVersion = typia.createAssert<ObjectVersion>();
export const validateObjectVersion = typia.createValidate<ObjectVersion>();

export type Topology = Record<string, string>;
export const isTopology = typia.createIs<Topology>();
export const assertTopology = typia.createAssert<Topology>();
export const validateTopology = typia.createValidate<Topology>();

export type ClusterVolumeSpec = Partial<{ Group: string, AccessMode: Partial<{ Scope: ("single" | "multi"), Sharing: ("none" | "readonly" | "onewriter" | "all"), MountVolume: Partial<{  }>, Secrets: Array<Partial<{ Key: string, Secret: string }>>, AccessibilityRequirements: Partial<{ Requisite: Array<Topology>, Preferred: Array<Topology> }>, CapacityRange: Partial<{ RequiredBytes: number, LimitBytes: number }>, Availability: ("active" | "pause" | "drain") }> }>;
export const isClusterVolumeSpec = ((input: unknown): input is ClusterVolumeSpec => typia.createIs<ClusterVolumeSpec>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Group": 1, "AccessMode": 1 }, key)));
export const assertClusterVolumeSpec = typia.createAssert<ClusterVolumeSpec>();
export const validateClusterVolumeSpec = typia.createValidate<ClusterVolumeSpec>();

export type ClusterVolume = Partial<{ ID: string, Version: ObjectVersion, CreatedAt: string, UpdatedAt: string, Spec: ClusterVolumeSpec, Info: Partial<{ CapacityBytes: number, VolumeContext: Record<string, string>, VolumeID: string, AccessibleTopology: Array<Topology> }>, PublishStatus: Array<Partial<{ NodeID: string, State: ("pending-publish" | "published" | "pending-node-unpublish" | "pending-controller-unpublish"), PublishContext: Record<string, string> }>> }>;
export const isClusterVolume = ((input: unknown): input is ClusterVolume => typia.createIs<ClusterVolume>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Spec": 1, "Info": 1, "PublishStatus": 1 }, key)));
export const assertClusterVolume = typia.createAssert<ClusterVolume>();
export const validateClusterVolume = typia.createValidate<ClusterVolume>();

export type Volume = { Name: string, Driver: string, Mountpoint: string, CreatedAt?: string, Status?: Record<string, Partial<{  }>>, Labels: Record<string, string>, Scope: ("local" | "global"), ClusterVolume?: ClusterVolume, Options: Record<string, string>, UsageData?: ({ Size: number, RefCount: number } | null) };
export const isVolume = ((input: unknown): input is Volume => typia.createIs<Volume>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Driver": 1, "Mountpoint": 1, "CreatedAt": 1, "Status": 1, "Labels": 1, "Scope": 1, "ClusterVolume": 1, "Options": 1, "UsageData": 1 }, key)));
export const assertVolume = typia.createAssert<Volume>();
export const validateVolume = typia.createValidate<Volume>();

export type VolumeCreateOptions = Partial<{ Name: string, Driver: string, DriverOpts: Record<string, string>, Labels: Record<string, string>, ClusterVolumeSpec: ClusterVolumeSpec }>;
export const isVolumeCreateOptions = ((input: unknown): input is VolumeCreateOptions => typia.createIs<VolumeCreateOptions>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Driver": 1, "DriverOpts": 1, "Labels": 1, "ClusterVolumeSpec": 1 }, key)));
export const assertVolumeCreateOptions = typia.createAssert<VolumeCreateOptions>();
export const validateVolumeCreateOptions = typia.createValidate<VolumeCreateOptions>();

export type VolumeListResponse = Partial<{ Volumes: Array<Volume>, Warnings: Array<string> }>;
export const isVolumeListResponse = ((input: unknown): input is VolumeListResponse => typia.createIs<VolumeListResponse>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Volumes": 1, "Warnings": 1 }, key)));
export const assertVolumeListResponse = typia.createAssert<VolumeListResponse>();
export const validateVolumeListResponse = typia.createValidate<VolumeListResponse>();

export type IPAMConfig = Partial<{ Subnet: string, IPRange: string, Gateway: string, AuxiliaryAddresses: Record<string, string> }>;
export const isIPAMConfig = ((input: unknown): input is IPAMConfig => typia.createIs<IPAMConfig>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Subnet": 1, "IPRange": 1, "Gateway": 1, "AuxiliaryAddresses": 1 }, key)));
export const assertIPAMConfig = typia.createAssert<IPAMConfig>();
export const validateIPAMConfig = typia.createValidate<IPAMConfig>();

export type IPAM = Partial<{ Driver: string, Config: Array<IPAMConfig>, Options: Record<string, string> }>;
export const isIPAM = ((input: unknown): input is IPAM => typia.createIs<IPAM>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Driver": 1, "Config": 1, "Options": 1 }, key)));
export const assertIPAM = typia.createAssert<IPAM>();
export const validateIPAM = typia.createValidate<IPAM>();

export type NetworkContainer = Partial<{ Name: string, EndpointID: string, MacAddress: string, IPv4Address: string, IPv6Address: string }>;
export const isNetworkContainer = ((input: unknown): input is NetworkContainer => typia.createIs<NetworkContainer>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "EndpointID": 1, "MacAddress": 1, "IPv4Address": 1, "IPv6Address": 1 }, key)));
export const assertNetworkContainer = typia.createAssert<NetworkContainer>();
export const validateNetworkContainer = typia.createValidate<NetworkContainer>();

export type Network = Partial<{ Name: string, Id: string, Created: string, Scope: string, Driver: string, EnableIPv6: boolean, IPAM: IPAM, Internal: boolean, Attachable: boolean, Ingress: boolean, Containers: Record<string, NetworkContainer>, Options: Record<string, string>, Labels: Record<string, string> }>;
export const isNetwork = ((input: unknown): input is Network => typia.createIs<Network>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Id": 1, "Created": 1, "Scope": 1, "Driver": 1, "EnableIPv6": 1, "IPAM": 1, "Internal": 1, "Attachable": 1, "Ingress": 1, "Containers": 1, "Options": 1, "Labels": 1 }, key)));
export const assertNetwork = typia.createAssert<Network>();
export const validateNetwork = typia.createValidate<Network>();

export type ErrorDetail = Partial<{ code: number, message: string }>;
export const isErrorDetail = ((input: unknown): input is ErrorDetail => typia.createIs<ErrorDetail>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "code": 1, "message": 1 }, key)));
export const assertErrorDetail = typia.createAssert<ErrorDetail>();
export const validateErrorDetail = typia.createValidate<ErrorDetail>();

export type ProgressDetail = Partial<{ current: number, total: number }>;
export const isProgressDetail = ((input: unknown): input is ProgressDetail => typia.createIs<ProgressDetail>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "current": 1, "total": 1 }, key)));
export const assertProgressDetail = typia.createAssert<ProgressDetail>();
export const validateProgressDetail = typia.createValidate<ProgressDetail>();

export type ImageID = Partial<{ ID: string }>;
export const isImageID = ((input: unknown): input is ImageID => typia.createIs<ImageID>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1 }, key)));
export const assertImageID = typia.createAssert<ImageID>();
export const validateImageID = typia.createValidate<ImageID>();

export type BuildInfo = Partial<{ id: string, stream: string, error: string, errorDetail: ErrorDetail, status: string, progress: string, progressDetail: ProgressDetail, aux: ImageID }>;
export const isBuildInfo = ((input: unknown): input is BuildInfo => typia.createIs<BuildInfo>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1, "stream": 1, "error": 1, "errorDetail": 1, "status": 1, "progress": 1, "progressDetail": 1, "aux": 1 }, key)));
export const assertBuildInfo = typia.createAssert<BuildInfo>();
export const validateBuildInfo = typia.createValidate<BuildInfo>();

export type BuildCache = Partial<{ ID: string, Parent: (string | null), Parents: (Array<string> | null), Type: ("internal" | "frontend" | "source.local" | "source.git.checkout" | "exec.cachemount" | "regular"), Description: string, InUse: boolean, Shared: boolean, Size: number, CreatedAt: string, LastUsedAt: (string | null), UsageCount: number }>;
export const isBuildCache = ((input: unknown): input is BuildCache => typia.createIs<BuildCache>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Parent": 1, "Parents": 1, "Type": 1, "Description": 1, "InUse": 1, "Shared": 1, "Size": 1, "CreatedAt": 1, "LastUsedAt": 1, "UsageCount": 1 }, key)));
export const assertBuildCache = typia.createAssert<BuildCache>();
export const validateBuildCache = typia.createValidate<BuildCache>();

export type CreateImageInfo = Partial<{ id: string, error: string, errorDetail: ErrorDetail, status: string, progress: string, progressDetail: ProgressDetail }>;
export const isCreateImageInfo = ((input: unknown): input is CreateImageInfo => typia.createIs<CreateImageInfo>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1, "error": 1, "errorDetail": 1, "status": 1, "progress": 1, "progressDetail": 1 }, key)));
export const assertCreateImageInfo = typia.createAssert<CreateImageInfo>();
export const validateCreateImageInfo = typia.createValidate<CreateImageInfo>();

export type PushImageInfo = Partial<{ error: string, status: string, progress: string, progressDetail: ProgressDetail }>;
export const isPushImageInfo = ((input: unknown): input is PushImageInfo => typia.createIs<PushImageInfo>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "error": 1, "status": 1, "progress": 1, "progressDetail": 1 }, key)));
export const assertPushImageInfo = typia.createAssert<PushImageInfo>();
export const validatePushImageInfo = typia.createValidate<PushImageInfo>();

export type ErrorResponse = { message: string };
export const isErrorResponse = ((input: unknown): input is ErrorResponse => typia.createIs<ErrorResponse>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "message": 1 }, key)));
export const assertErrorResponse = typia.createAssert<ErrorResponse>();
export const validateErrorResponse = typia.createValidate<ErrorResponse>();

export type IdResponse = { Id: string };
export const isIdResponse = ((input: unknown): input is IdResponse => typia.createIs<IdResponse>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1 }, key)));
export const assertIdResponse = typia.createAssert<IdResponse>();
export const validateIdResponse = typia.createValidate<IdResponse>();

export type PluginMount = { Name: string, Description: string, Settable: Array<string>, Source: string, Destination: string, Type: string, Options: Array<string> };
export const isPluginMount = ((input: unknown): input is PluginMount => typia.createIs<PluginMount>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Description": 1, "Settable": 1, "Source": 1, "Destination": 1, "Type": 1, "Options": 1 }, key)));
export const assertPluginMount = typia.createAssert<PluginMount>();
export const validatePluginMount = typia.createValidate<PluginMount>();

export type PluginDevice = { Name: string, Description: string, Settable: Array<string>, Path: string };
export const isPluginDevice = ((input: unknown): input is PluginDevice => typia.createIs<PluginDevice>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Description": 1, "Settable": 1, "Path": 1 }, key)));
export const assertPluginDevice = typia.createAssert<PluginDevice>();
export const validatePluginDevice = typia.createValidate<PluginDevice>();

export type PluginEnv = { Name: string, Description: string, Settable: Array<string>, Value: string };
export const isPluginEnv = ((input: unknown): input is PluginEnv => typia.createIs<PluginEnv>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Description": 1, "Settable": 1, "Value": 1 }, key)));
export const assertPluginEnv = typia.createAssert<PluginEnv>();
export const validatePluginEnv = typia.createValidate<PluginEnv>();

export type PluginInterfaceType = { Prefix: string, Capability: string, Version: string };
export const isPluginInterfaceType = ((input: unknown): input is PluginInterfaceType => typia.createIs<PluginInterfaceType>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Prefix": 1, "Capability": 1, "Version": 1 }, key)));
export const assertPluginInterfaceType = typia.createAssert<PluginInterfaceType>();
export const validatePluginInterfaceType = typia.createValidate<PluginInterfaceType>();

export type PluginPrivilege = Partial<{ Name: string, Description: string, Value: Array<string> }>;
export const isPluginPrivilege = ((input: unknown): input is PluginPrivilege => typia.createIs<PluginPrivilege>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Description": 1, "Value": 1 }, key)));
export const assertPluginPrivilege = typia.createAssert<PluginPrivilege>();
export const validatePluginPrivilege = typia.createValidate<PluginPrivilege>();

export type Plugin = { Id?: string, Name: string, Enabled: boolean, Settings: { Mounts: Array<PluginMount>, Env: Array<string>, Args: Array<string>, Devices: Array<PluginDevice> }, PluginReference?: string, Config: { DockerVersion?: string, Description: string, Documentation: string, Interface: { Types: Array<PluginInterfaceType>, Socket: string, ProtocolScheme?: ("" | "moby.plugins.http/v1") }, Entrypoint: Array<string>, WorkDir: string, User?: Partial<{ UID: number, GID: number }>, Network: { Type: string }, Linux: { Capabilities: Array<string>, AllowAllDevices: boolean, Devices: Array<PluginDevice> }, PropagatedMount: string, IpcHost: boolean, PidHost: boolean, Mounts: Array<PluginMount>, Env: Array<PluginEnv>, Args: { Name: string, Description: string, Settable: Array<string>, Value: Array<string> }, rootfs?: Partial<{ type: string, diff_ids: Array<string> }> } };
export const isPlugin = ((input: unknown): input is Plugin => typia.createIs<Plugin>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "Name": 1, "Enabled": 1, "Settings": 1, "PluginReference": 1, "Config": 1 }, key)));
export const assertPlugin = typia.createAssert<Plugin>();
export const validatePlugin = typia.createValidate<Plugin>();

export type NodeSpec = Partial<{ Name: string, Labels: Record<string, string>, Role: ("worker" | "manager"), Availability: ("active" | "pause" | "drain") }>;
export const isNodeSpec = ((input: unknown): input is NodeSpec => typia.createIs<NodeSpec>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Labels": 1, "Role": 1, "Availability": 1 }, key)));
export const assertNodeSpec = typia.createAssert<NodeSpec>();
export const validateNodeSpec = typia.createValidate<NodeSpec>();

export type Platform = Partial<{ Architecture: string, OS: string }>;
export const isPlatform = ((input: unknown): input is Platform => typia.createIs<Platform>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Architecture": 1, "OS": 1 }, key)));
export const assertPlatform = typia.createAssert<Platform>();
export const validatePlatform = typia.createValidate<Platform>();

export type EngineDescription = Partial<{ EngineVersion: string, Labels: Record<string, string>, Plugins: Array<Partial<{ Type: string, Name: string }>> }>;
export const isEngineDescription = ((input: unknown): input is EngineDescription => typia.createIs<EngineDescription>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "EngineVersion": 1, "Labels": 1, "Plugins": 1 }, key)));
export const assertEngineDescription = typia.createAssert<EngineDescription>();
export const validateEngineDescription = typia.createValidate<EngineDescription>();

export type TLSInfo = Partial<{ TrustRoot: string, CertIssuerSubject: string, CertIssuerPublicKey: string }>;
export const isTLSInfo = ((input: unknown): input is TLSInfo => typia.createIs<TLSInfo>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "TrustRoot": 1, "CertIssuerSubject": 1, "CertIssuerPublicKey": 1 }, key)));
export const assertTLSInfo = typia.createAssert<TLSInfo>();
export const validateTLSInfo = typia.createValidate<TLSInfo>();

export type NodeDescription = Partial<{ Hostname: string, Platform: Platform, Resources: ResourceObject, Engine: EngineDescription, TLSInfo: TLSInfo }>;
export const isNodeDescription = ((input: unknown): input is NodeDescription => typia.createIs<NodeDescription>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Hostname": 1, "Platform": 1, "Resources": 1, "Engine": 1, "TLSInfo": 1 }, key)));
export const assertNodeDescription = typia.createAssert<NodeDescription>();
export const validateNodeDescription = typia.createValidate<NodeDescription>();

export type NodeState = ("unknown" | "down" | "ready" | "disconnected");
export const isNodeState = typia.createIs<NodeState>();
export const assertNodeState = typia.createAssert<NodeState>();
export const validateNodeState = typia.createValidate<NodeState>();

export type NodeStatus = Partial<{ State: NodeState, Message: string, Addr: string }>;
export const isNodeStatus = ((input: unknown): input is NodeStatus => typia.createIs<NodeStatus>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "State": 1, "Message": 1, "Addr": 1 }, key)));
export const assertNodeStatus = typia.createAssert<NodeStatus>();
export const validateNodeStatus = typia.createValidate<NodeStatus>();

export type Reachability = ("unknown" | "unreachable" | "reachable");
export const isReachability = typia.createIs<Reachability>();
export const assertReachability = typia.createAssert<Reachability>();
export const validateReachability = typia.createValidate<Reachability>();

export type ManagerStatus = (Partial<{ Leader: boolean, Reachability: Reachability, Addr: string }> | null);
export const isManagerStatus = typia.createIs<ManagerStatus>();
export const assertManagerStatus = typia.createAssert<ManagerStatus>();
export const validateManagerStatus = typia.createValidate<ManagerStatus>();

export type Node = Partial<{ ID: string, Version: ObjectVersion, CreatedAt: string, UpdatedAt: string, Spec: NodeSpec, Description: NodeDescription, Status: NodeStatus, ManagerStatus: ManagerStatus }>;
export const isNode = ((input: unknown): input is Node => typia.createIs<Node>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Spec": 1, "Description": 1, "Status": 1, "ManagerStatus": 1 }, key)));
export const assertNode = typia.createAssert<Node>();
export const validateNode = typia.createValidate<Node>();

export type SwarmSpec = Partial<{ Name: string, Labels: Record<string, string>, Orchestration: (Partial<{ TaskHistoryRetentionLimit: number }> | null), Raft: Partial<{ SnapshotInterval: number, KeepOldSnapshots: number, LogEntriesForSlowFollowers: number, ElectionTick: number, HeartbeatTick: number }>, Dispatcher: (Partial<{ HeartbeatPeriod: number }> | null), CAConfig: (Partial<{ NodeCertExpiry: number, ExternalCAs: Array<Partial<{ Protocol: "cfssl", URL: string, Options: Record<string, string>, CACert: string }>>, SigningCACert: string, SigningCAKey: string, ForceRotate: number }> | null), EncryptionConfig: Partial<{ AutoLockManagers: boolean }>, TaskDefaults: Partial<{ LogDriver: Partial<{ Name: string, Options: Record<string, string> }> }> }>;
export const isSwarmSpec = ((input: unknown): input is SwarmSpec => typia.createIs<SwarmSpec>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Labels": 1, "Orchestration": 1, "Raft": 1, "Dispatcher": 1, "CAConfig": 1, "EncryptionConfig": 1, "TaskDefaults": 1 }, key)));
export const assertSwarmSpec = typia.createAssert<SwarmSpec>();
export const validateSwarmSpec = typia.createValidate<SwarmSpec>();

export type ClusterInfo = (Partial<{ ID: string, Version: ObjectVersion, CreatedAt: string, UpdatedAt: string, Spec: SwarmSpec, TLSInfo: TLSInfo, RootRotationInProgress: boolean, DataPathPort: number, DefaultAddrPool: Array<string>, SubnetSize: number }> | null);
export const isClusterInfo = typia.createIs<ClusterInfo>();
export const assertClusterInfo = typia.createAssert<ClusterInfo>();
export const validateClusterInfo = typia.createValidate<ClusterInfo>();

export type JoinTokens = Partial<{ Worker: string, Manager: string }>;
export const isJoinTokens = ((input: unknown): input is JoinTokens => typia.createIs<JoinTokens>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Worker": 1, "Manager": 1 }, key)));
export const assertJoinTokens = typia.createAssert<JoinTokens>();
export const validateJoinTokens = typia.createValidate<JoinTokens>();

export type Swarm = (ClusterInfo & Partial<{ JoinTokens: JoinTokens }>);
export const isSwarm = ((input: unknown): input is Swarm => typia.createIs<Swarm>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Spec": 1, "TLSInfo": 1, "RootRotationInProgress": 1, "DataPathPort": 1, "DefaultAddrPool": 1, "SubnetSize": 1, "JoinTokens": 1 }, key)));
export const assertSwarm = typia.createAssert<Swarm>();
export const validateSwarm = typia.createValidate<Swarm>();

export type NetworkAttachmentConfig = Partial<{ Target: string, Aliases: Array<string>, DriverOpts: Record<string, string> }>;
export const isNetworkAttachmentConfig = ((input: unknown): input is NetworkAttachmentConfig => typia.createIs<NetworkAttachmentConfig>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Target": 1, "Aliases": 1, "DriverOpts": 1 }, key)));
export const assertNetworkAttachmentConfig = typia.createAssert<NetworkAttachmentConfig>();
export const validateNetworkAttachmentConfig = typia.createValidate<NetworkAttachmentConfig>();

export type TaskSpec = Partial<{ PluginSpec: Partial<{ Name: string, Remote: string, Disabled: boolean, PluginPrivilege: Array<PluginPrivilege> }>, ContainerSpec: Partial<{ Image: string, Labels: Record<string, string>, Command: Array<string>, Args: Array<string>, Hostname: string, Env: Array<string>, Dir: string, User: string, Groups: Array<string>, Privileges: Partial<{ CredentialSpec: Partial<{ Config: string, File: string, Registry: string }>, SELinuxContext: Partial<{ Disable: boolean, User: string, Role: string, Type: string, Level: string }> }>, TTY: boolean, OpenStdin: boolean, ReadOnly: boolean, Mounts: Array<Mount>, StopSignal: string, StopGracePeriod: number, HealthCheck: HealthConfig, Hosts: Array<string>, DNSConfig: Partial<{ Nameservers: Array<string>, Search: Array<string>, Options: Array<string> }>, Secrets: Array<Partial<{ File: Partial<{ Name: string, UID: string, GID: string, Mode: number }>, SecretID: string, SecretName: string }>>, Configs: Array<Partial<{ File: Partial<{ Name: string, UID: string, GID: string, Mode: number }>, Runtime: Partial<{  }>, ConfigID: string, ConfigName: string }>>, Isolation: ("default" | "process" | "hyperv"), Init: (boolean | null), Sysctls: Record<string, string>, CapabilityAdd: Array<string>, CapabilityDrop: Array<string>, Ulimits: Array<Partial<{ Name: string, Soft: number, Hard: number }>> }>, NetworkAttachmentSpec: Partial<{ ContainerID: string }>, Resources: Partial<{ Limits: Limit, Reservations: ResourceObject }>, RestartPolicy: Partial<{ Condition: ("none" | "on-failure" | "any"), Delay: number, MaxAttempts: number, Window: number }>, Placement: Partial<{ Constraints: Array<string>, Preferences: Array<Partial<{ Spread: Partial<{ SpreadDescriptor: string }> }>>, MaxReplicas: number, Platforms: Array<Platform> }>, ForceUpdate: number, Runtime: string, Networks: Array<NetworkAttachmentConfig>, LogDriver: Partial<{ Name: string, Options: Record<string, string> }> }>;
export const isTaskSpec = ((input: unknown): input is TaskSpec => typia.createIs<TaskSpec>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "PluginSpec": 1, "ContainerSpec": 1, "NetworkAttachmentSpec": 1, "Resources": 1, "RestartPolicy": 1, "Placement": 1, "ForceUpdate": 1, "Runtime": 1, "Networks": 1, "LogDriver": 1 }, key)));
export const assertTaskSpec = typia.createAssert<TaskSpec>();
export const validateTaskSpec = typia.createValidate<TaskSpec>();

export type TaskState = ("new" | "allocated" | "pending" | "assigned" | "accepted" | "preparing" | "ready" | "starting" | "running" | "complete" | "shutdown" | "failed" | "rejected" | "remove" | "orphaned");
export const isTaskState = typia.createIs<TaskState>();
export const assertTaskState = typia.createAssert<TaskState>();
export const validateTaskState = typia.createValidate<TaskState>();

export type Task = Partial<{ ID: string, Version: ObjectVersion, CreatedAt: string, UpdatedAt: string, Name: string, Labels: Record<string, string>, Spec: TaskSpec, ServiceID: string, Slot: number, NodeID: string, AssignedGenericResources: GenericResources, Status: Partial<{ Timestamp: string, State: TaskState, Message: string, Err: string, ContainerStatus: Partial<{ ContainerID: string, PID: number, ExitCode: number }> }>, DesiredState: TaskState, JobIteration: ObjectVersion }>;
export const isTask = ((input: unknown): input is Task => typia.createIs<Task>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Name": 1, "Labels": 1, "Spec": 1, "ServiceID": 1, "Slot": 1, "NodeID": 1, "AssignedGenericResources": 1, "Status": 1, "DesiredState": 1, "JobIteration": 1 }, key)));
export const assertTask = typia.createAssert<Task>();
export const validateTask = typia.createValidate<Task>();

export type EndpointPortConfig = Partial<{ Name: string, Protocol: ("tcp" | "udp" | "sctp"), TargetPort: number, PublishedPort: number, PublishMode: ("ingress" | "host") }>;
export const isEndpointPortConfig = ((input: unknown): input is EndpointPortConfig => typia.createIs<EndpointPortConfig>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Protocol": 1, "TargetPort": 1, "PublishedPort": 1, "PublishMode": 1 }, key)));
export const assertEndpointPortConfig = typia.createAssert<EndpointPortConfig>();
export const validateEndpointPortConfig = typia.createValidate<EndpointPortConfig>();

export type EndpointSpec = Partial<{ Mode: ("vip" | "dnsrr"), Ports: Array<EndpointPortConfig> }>;
export const isEndpointSpec = ((input: unknown): input is EndpointSpec => typia.createIs<EndpointSpec>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Mode": 1, "Ports": 1 }, key)));
export const assertEndpointSpec = typia.createAssert<EndpointSpec>();
export const validateEndpointSpec = typia.createValidate<EndpointSpec>();

export type ServiceSpec = Partial<{ Name: string, Labels: Record<string, string>, TaskTemplate: TaskSpec, Mode: Partial<{ Replicated: Partial<{ Replicas: number }>, Global: Partial<{  }>, ReplicatedJob: Partial<{ MaxConcurrent: number, TotalCompletions: number }>, GlobalJob: Partial<{  }> }>, UpdateConfig: Partial<{ Parallelism: number, Delay: number, FailureAction: ("continue" | "pause" | "rollback"), Monitor: number, MaxFailureRatio: number, Order: ("stop-first" | "start-first") }>, RollbackConfig: Partial<{ Parallelism: number, Delay: number, FailureAction: ("continue" | "pause"), Monitor: number, MaxFailureRatio: number, Order: ("stop-first" | "start-first") }>, Networks: Array<NetworkAttachmentConfig>, EndpointSpec: EndpointSpec }>;
export const isServiceSpec = ((input: unknown): input is ServiceSpec => typia.createIs<ServiceSpec>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Labels": 1, "TaskTemplate": 1, "Mode": 1, "UpdateConfig": 1, "RollbackConfig": 1, "Networks": 1, "EndpointSpec": 1 }, key)));
export const assertServiceSpec = typia.createAssert<ServiceSpec>();
export const validateServiceSpec = typia.createValidate<ServiceSpec>();

export type Service = Partial<{ ID: string, Version: ObjectVersion, CreatedAt: string, UpdatedAt: string, Spec: ServiceSpec, Endpoint: Partial<{ Spec: EndpointSpec, Ports: Array<EndpointPortConfig>, VirtualIPs: Array<Partial<{ NetworkID: string, Addr: string }>> }>, UpdateStatus: Partial<{ State: ("updating" | "paused" | "completed"), StartedAt: string, CompletedAt: string, Message: string }>, ServiceStatus: Partial<{ RunningTasks: number, DesiredTasks: number, CompletedTasks: number }>, JobStatus: Partial<{ JobIteration: ObjectVersion, LastExecution: string }> }>;
export const isService = ((input: unknown): input is Service => typia.createIs<Service>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Spec": 1, "Endpoint": 1, "UpdateStatus": 1, "ServiceStatus": 1, "JobStatus": 1 }, key)));
export const assertService = typia.createAssert<Service>();
export const validateService = typia.createValidate<Service>();

export type ImageDeleteResponseItem = Partial<{ Untagged: string, Deleted: string }>;
export const isImageDeleteResponseItem = ((input: unknown): input is ImageDeleteResponseItem => typia.createIs<ImageDeleteResponseItem>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Untagged": 1, "Deleted": 1 }, key)));
export const assertImageDeleteResponseItem = typia.createAssert<ImageDeleteResponseItem>();
export const validateImageDeleteResponseItem = typia.createValidate<ImageDeleteResponseItem>();

export type ServiceUpdateResponse = Partial<{ Warnings: Array<string> }>;
export const isServiceUpdateResponse = ((input: unknown): input is ServiceUpdateResponse => typia.createIs<ServiceUpdateResponse>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Warnings": 1 }, key)));
export const assertServiceUpdateResponse = typia.createAssert<ServiceUpdateResponse>();
export const validateServiceUpdateResponse = typia.createValidate<ServiceUpdateResponse>();

export type ContainerSummary = Partial<{ Id: string, Names: Array<string>, Image: string, ImageID: string, Command: string, Created: number, Ports: Array<Port>, SizeRw: number, SizeRootFs: number, Labels: Record<string, string>, State: string, Status: string, HostConfig: Partial<{ NetworkMode: string }>, NetworkSettings: Partial<{ Networks: Record<string, EndpointSettings> }>, Mounts: Array<MountPoint> }>;
export const isContainerSummary = ((input: unknown): input is ContainerSummary => typia.createIs<ContainerSummary>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "Names": 1, "Image": 1, "ImageID": 1, "Command": 1, "Created": 1, "Ports": 1, "SizeRw": 1, "SizeRootFs": 1, "Labels": 1, "State": 1, "Status": 1, "HostConfig": 1, "NetworkSettings": 1, "Mounts": 1 }, key)));
export const assertContainerSummary = typia.createAssert<ContainerSummary>();
export const validateContainerSummary = typia.createValidate<ContainerSummary>();

export type Driver = { Name: string, Options?: Record<string, string> };
export const isDriver = ((input: unknown): input is Driver => typia.createIs<Driver>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Options": 1 }, key)));
export const assertDriver = typia.createAssert<Driver>();
export const validateDriver = typia.createValidate<Driver>();

export type SecretSpec = Partial<{ Name: string, Labels: Record<string, string>, Data: string, Driver: Driver, Templating: Driver }>;
export const isSecretSpec = ((input: unknown): input is SecretSpec => typia.createIs<SecretSpec>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Labels": 1, "Data": 1, "Driver": 1, "Templating": 1 }, key)));
export const assertSecretSpec = typia.createAssert<SecretSpec>();
export const validateSecretSpec = typia.createValidate<SecretSpec>();

export type Secret = Partial<{ ID: string, Version: ObjectVersion, CreatedAt: string, UpdatedAt: string, Spec: SecretSpec }>;
export const isSecret = ((input: unknown): input is Secret => typia.createIs<Secret>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Spec": 1 }, key)));
export const assertSecret = typia.createAssert<Secret>();
export const validateSecret = typia.createValidate<Secret>();

export type ConfigSpec = Partial<{ Name: string, Labels: Record<string, string>, Data: string, Templating: Driver }>;
export const isConfigSpec = ((input: unknown): input is ConfigSpec => typia.createIs<ConfigSpec>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Labels": 1, "Data": 1, "Templating": 1 }, key)));
export const assertConfigSpec = typia.createAssert<ConfigSpec>();
export const validateConfigSpec = typia.createValidate<ConfigSpec>();

export type Config = Partial<{ ID: string, Version: ObjectVersion, CreatedAt: string, UpdatedAt: string, Spec: ConfigSpec }>;
export const isConfig = ((input: unknown): input is Config => typia.createIs<Config>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Spec": 1 }, key)));
export const assertConfig = typia.createAssert<Config>();
export const validateConfig = typia.createValidate<Config>();

export type ContainerState = (Partial<{ Status: ("created" | "running" | "paused" | "restarting" | "removing" | "exited" | "dead"), Running: boolean, Paused: boolean, Restarting: boolean, OOMKilled: boolean, Dead: boolean, Pid: number, ExitCode: number, Error: string, StartedAt: string, FinishedAt: string, Health: Health }> | null);
export const isContainerState = typia.createIs<ContainerState>();
export const assertContainerState = typia.createAssert<ContainerState>();
export const validateContainerState = typia.createValidate<ContainerState>();

export type ContainerCreateResponse = { Id: string, Warnings: Array<string> };
export const isContainerCreateResponse = ((input: unknown): input is ContainerCreateResponse => typia.createIs<ContainerCreateResponse>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "Warnings": 1 }, key)));
export const assertContainerCreateResponse = typia.createAssert<ContainerCreateResponse>();
export const validateContainerCreateResponse = typia.createValidate<ContainerCreateResponse>();

export type ContainerWaitExitError = Partial<{ Message: string }>;
export const isContainerWaitExitError = ((input: unknown): input is ContainerWaitExitError => typia.createIs<ContainerWaitExitError>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Message": 1 }, key)));
export const assertContainerWaitExitError = typia.createAssert<ContainerWaitExitError>();
export const validateContainerWaitExitError = typia.createValidate<ContainerWaitExitError>();

export type ContainerWaitResponse = { StatusCode: number, Error?: ContainerWaitExitError };
export const isContainerWaitResponse = ((input: unknown): input is ContainerWaitResponse => typia.createIs<ContainerWaitResponse>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "StatusCode": 1, "Error": 1 }, key)));
export const assertContainerWaitResponse = typia.createAssert<ContainerWaitResponse>();
export const validateContainerWaitResponse = typia.createValidate<ContainerWaitResponse>();

export type SystemVersion = Partial<{ Platform: { Name: string }, Components: Array<{ Name: string, Version: string, Details?: (Partial<{  }> | null) }>, Version: string, ApiVersion: string, MinAPIVersion: string, GitCommit: string, GoVersion: string, Os: string, Arch: string, KernelVersion: string, Experimental: boolean, BuildTime: string }>;
export const isSystemVersion = ((input: unknown): input is SystemVersion => typia.createIs<SystemVersion>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Platform": 1, "Components": 1, "Version": 1, "ApiVersion": 1, "MinAPIVersion": 1, "GitCommit": 1, "GoVersion": 1, "Os": 1, "Arch": 1, "KernelVersion": 1, "Experimental": 1, "BuildTime": 1 }, key)));
export const assertSystemVersion = typia.createAssert<SystemVersion>();
export const validateSystemVersion = typia.createValidate<SystemVersion>();

export type PluginsInfo = Partial<{ Volume: Array<string>, Network: Array<string>, Authorization: Array<string>, Log: Array<string> }>;
export const isPluginsInfo = ((input: unknown): input is PluginsInfo => typia.createIs<PluginsInfo>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Volume": 1, "Network": 1, "Authorization": 1, "Log": 1 }, key)));
export const assertPluginsInfo = typia.createAssert<PluginsInfo>();
export const validatePluginsInfo = typia.createValidate<PluginsInfo>();

export type IndexInfo = (Partial<{ Name: string, Mirrors: Array<string>, Secure: boolean, Official: boolean }> | null);
export const isIndexInfo = typia.createIs<IndexInfo>();
export const assertIndexInfo = typia.createAssert<IndexInfo>();
export const validateIndexInfo = typia.createValidate<IndexInfo>();

export type RegistryServiceConfig = (Partial<{ AllowNondistributableArtifactsCIDRs: Array<string>, AllowNondistributableArtifactsHostnames: Array<string>, InsecureRegistryCIDRs: Array<string>, IndexConfigs: Record<string, IndexInfo>, Mirrors: Array<string> }> | null);
export const isRegistryServiceConfig = typia.createIs<RegistryServiceConfig>();
export const assertRegistryServiceConfig = typia.createAssert<RegistryServiceConfig>();
export const validateRegistryServiceConfig = typia.createValidate<RegistryServiceConfig>();

export type Runtime = Partial<{ path: string, runtimeArgs: (Array<string> | null) }>;
export const isRuntime = ((input: unknown): input is Runtime => typia.createIs<Runtime>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "path": 1, "runtimeArgs": 1 }, key)));
export const assertRuntime = typia.createAssert<Runtime>();
export const validateRuntime = typia.createValidate<Runtime>();

export type LocalNodeState = ("" | "inactive" | "pending" | "active" | "error" | "locked");
export const isLocalNodeState = typia.createIs<LocalNodeState>();
export const assertLocalNodeState = typia.createAssert<LocalNodeState>();
export const validateLocalNodeState = typia.createValidate<LocalNodeState>();

export type PeerNode = Partial<{ NodeID: string, Addr: string }>;
export const isPeerNode = ((input: unknown): input is PeerNode => typia.createIs<PeerNode>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "NodeID": 1, "Addr": 1 }, key)));
export const assertPeerNode = typia.createAssert<PeerNode>();
export const validatePeerNode = typia.createValidate<PeerNode>();

export type SwarmInfo = Partial<{ NodeID: string, NodeAddr: string, LocalNodeState: LocalNodeState, ControlAvailable: boolean, Error: string, RemoteManagers: (Array<PeerNode> | null), Nodes: (number | null), Managers: (number | null), Cluster: ClusterInfo }>;
export const isSwarmInfo = ((input: unknown): input is SwarmInfo => typia.createIs<SwarmInfo>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "NodeID": 1, "NodeAddr": 1, "LocalNodeState": 1, "ControlAvailable": 1, "Error": 1, "RemoteManagers": 1, "Nodes": 1, "Managers": 1, "Cluster": 1 }, key)));
export const assertSwarmInfo = typia.createAssert<SwarmInfo>();
export const validateSwarmInfo = typia.createValidate<SwarmInfo>();

export type Commit = Partial<{ ID: string, Expected: string }>;
export const isCommit = ((input: unknown): input is Commit => typia.createIs<Commit>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Expected": 1 }, key)));
export const assertCommit = typia.createAssert<Commit>();
export const validateCommit = typia.createValidate<Commit>();

export type SystemInfo = Partial<{ ID: string, Containers: number, ContainersRunning: number, ContainersPaused: number, ContainersStopped: number, Images: number, Driver: string, DriverStatus: Array<Array<string>>, DockerRootDir: string, Plugins: PluginsInfo, MemoryLimit: boolean, SwapLimit: boolean, KernelMemoryTCP: boolean, CpuCfsPeriod: boolean, CpuCfsQuota: boolean, CPUShares: boolean, CPUSet: boolean, PidsLimit: boolean, OomKillDisable: boolean, IPv4Forwarding: boolean, BridgeNfIptables: boolean, BridgeNfIp6tables: boolean, Debug: boolean, NFd: number, NGoroutines: number, SystemTime: string, LoggingDriver: string, CgroupDriver: ("cgroupfs" | "systemd" | "none"), CgroupVersion: ("1" | "2"), NEventsListener: number, KernelVersion: string, OperatingSystem: string, OSVersion: string, OSType: string, Architecture: string, NCPU: number, MemTotal: number, IndexServerAddress: string, RegistryConfig: RegistryServiceConfig, GenericResources: GenericResources, HttpProxy: string, HttpsProxy: string, NoProxy: string, Name: string, Labels: Array<string>, ExperimentalBuild: boolean, ServerVersion: string, Runtimes: Record<string, Runtime>, DefaultRuntime: string, Swarm: SwarmInfo, LiveRestoreEnabled: boolean, Isolation: ("default" | "hyperv" | "process"), InitBinary: string, ContainerdCommit: Commit, RuncCommit: Commit, InitCommit: Commit, SecurityOptions: Array<string>, ProductLicense: string, DefaultAddressPools: Array<Partial<{ Base: string, Size: number }>>, Warnings: Array<string> }>;
export const isSystemInfo = ((input: unknown): input is SystemInfo => typia.createIs<SystemInfo>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Containers": 1, "ContainersRunning": 1, "ContainersPaused": 1, "ContainersStopped": 1, "Images": 1, "Driver": 1, "DriverStatus": 1, "DockerRootDir": 1, "Plugins": 1, "MemoryLimit": 1, "SwapLimit": 1, "KernelMemoryTCP": 1, "CpuCfsPeriod": 1, "CpuCfsQuota": 1, "CPUShares": 1, "CPUSet": 1, "PidsLimit": 1, "OomKillDisable": 1, "IPv4Forwarding": 1, "BridgeNfIptables": 1, "BridgeNfIp6tables": 1, "Debug": 1, "NFd": 1, "NGoroutines": 1, "SystemTime": 1, "LoggingDriver": 1, "CgroupDriver": 1, "CgroupVersion": 1, "NEventsListener": 1, "KernelVersion": 1, "OperatingSystem": 1, "OSVersion": 1, "OSType": 1, "Architecture": 1, "NCPU": 1, "MemTotal": 1, "IndexServerAddress": 1, "RegistryConfig": 1, "GenericResources": 1, "HttpProxy": 1, "HttpsProxy": 1, "NoProxy": 1, "Name": 1, "Labels": 1, "ExperimentalBuild": 1, "ServerVersion": 1, "Runtimes": 1, "DefaultRuntime": 1, "Swarm": 1, "LiveRestoreEnabled": 1, "Isolation": 1, "InitBinary": 1, "ContainerdCommit": 1, "RuncCommit": 1, "InitCommit": 1, "SecurityOptions": 1, "ProductLicense": 1, "DefaultAddressPools": 1, "Warnings": 1 }, key)));
export const assertSystemInfo = typia.createAssert<SystemInfo>();
export const validateSystemInfo = typia.createValidate<SystemInfo>();

export type EventActor = Partial<{ ID: string, Attributes: Record<string, string> }>;
export const isEventActor = ((input: unknown): input is EventActor => typia.createIs<EventActor>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Attributes": 1 }, key)));
export const assertEventActor = typia.createAssert<EventActor>();
export const validateEventActor = typia.createValidate<EventActor>();

export type EventMessage = Partial<{ Type: ("builder" | "config" | "container" | "daemon" | "image" | "network" | "node" | "plugin" | "secret" | "service" | "volume"), Action: string, Actor: EventActor, scope: ("local" | "swarm"), time: number, timeNano: number }>;
export const isEventMessage = ((input: unknown): input is EventMessage => typia.createIs<EventMessage>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Type": 1, "Action": 1, "Actor": 1, "scope": 1, "time": 1, "timeNano": 1 }, key)));
export const assertEventMessage = typia.createAssert<EventMessage>();
export const validateEventMessage = typia.createValidate<EventMessage>();

export type OCIDescriptor = Partial<{ mediaType: string, digest: string, size: number }>;
export const isOCIDescriptor = ((input: unknown): input is OCIDescriptor => typia.createIs<OCIDescriptor>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "mediaType": 1, "digest": 1, "size": 1 }, key)));
export const assertOCIDescriptor = typia.createAssert<OCIDescriptor>();
export const validateOCIDescriptor = typia.createValidate<OCIDescriptor>();

export type OCIPlatform = Partial<{ architecture: string, os: string, "os.version": string, "os.features": Array<string>, variant: string }>;
export const isOCIPlatform = ((input: unknown): input is OCIPlatform => typia.createIs<OCIPlatform>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "architecture": 1, "os": 1, "os.version": 1, "os.features": 1, "variant": 1 }, key)));
export const assertOCIPlatform = typia.createAssert<OCIPlatform>();
export const validateOCIPlatform = typia.createValidate<OCIPlatform>();

export type DistributionInspect = { Descriptor: OCIDescriptor, Platforms: Array<OCIPlatform> };
export const isDistributionInspect = ((input: unknown): input is DistributionInspect => typia.createIs<DistributionInspect>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Descriptor": 1, "Platforms": 1 }, key)));
export const assertDistributionInspect = typia.createAssert<DistributionInspect>();
export const validateDistributionInspect = typia.createValidate<DistributionInspect>();

// </Schemas>

// <Endpoints>
export type get_ContainerList = typeof get_ContainerList;
export const get_ContainerList = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/containers/json">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ all: boolean, limit: number, size: boolean, filters: string }> => typia.createIs<Partial<{ all: boolean, limit: number, size: boolean, filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "all": 1, "limit": 1, "size": 1, "filters": 1 }, key))) },
  responses: { 200: typia.createIs<Array<ContainerSummary>>(), 400: isErrorResponse, 500: isErrorResponse },
};

export type post_ContainerCreate = typeof post_ContainerCreate;
export const post_ContainerCreate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/create">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ name: string, platform: string }> => typia.createIs<Partial<{ name: string, platform: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1, "platform": 1 }, key))), body: ((input: unknown): input is (ContainerConfig & Partial<{ HostConfig: HostConfig, NetworkingConfig: NetworkingConfig }>) => typia.createIs<(ContainerConfig & Partial<{ HostConfig: HostConfig, NetworkingConfig: NetworkingConfig }>)>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Hostname": 1, "Domainname": 1, "User": 1, "AttachStdin": 1, "AttachStdout": 1, "AttachStderr": 1, "ExposedPorts": 1, "Tty": 1, "OpenStdin": 1, "StdinOnce": 1, "Env": 1, "Cmd": 1, "Healthcheck": 1, "ArgsEscaped": 1, "Image": 1, "Volumes": 1, "WorkingDir": 1, "Entrypoint": 1, "NetworkDisabled": 1, "MacAddress": 1, "OnBuild": 1, "Labels": 1, "StopSignal": 1, "StopTimeout": 1, "Shell": 1, "HostConfig": 1, "NetworkingConfig": 1 }, key))) },
  responses: { 201: isContainerCreateResponse, 400: isErrorResponse, 404: isErrorResponse, 409: isErrorResponse, 500: isErrorResponse },
};

export type get_ContainerInspect = typeof get_ContainerInspect;
export const get_ContainerInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/containers/{id}/json">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ size: boolean }> => typia.createIs<Partial<{ size: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "size": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: ((input: unknown): input is Partial<{ Id: string, Created: string, Path: string, Args: Array<string>, State: ContainerState, Image: string, ResolvConfPath: string, HostnamePath: string, HostsPath: string, LogPath: string, Name: string, RestartCount: number, Driver: string, Platform: string, MountLabel: string, ProcessLabel: string, AppArmorProfile: string, ExecIDs: (Array<string> | null), HostConfig: HostConfig, GraphDriver: GraphDriverData, SizeRw: number, SizeRootFs: number, Mounts: Array<MountPoint>, Config: ContainerConfig, NetworkSettings: NetworkSettings }> => typia.createIs<Partial<{ Id: string, Created: string, Path: string, Args: Array<string>, State: ContainerState, Image: string, ResolvConfPath: string, HostnamePath: string, HostsPath: string, LogPath: string, Name: string, RestartCount: number, Driver: string, Platform: string, MountLabel: string, ProcessLabel: string, AppArmorProfile: string, ExecIDs: (Array<string> | null), HostConfig: HostConfig, GraphDriver: GraphDriverData, SizeRw: number, SizeRootFs: number, Mounts: Array<MountPoint>, Config: ContainerConfig, NetworkSettings: NetworkSettings }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "Created": 1, "Path": 1, "Args": 1, "State": 1, "Image": 1, "ResolvConfPath": 1, "HostnamePath": 1, "HostsPath": 1, "LogPath": 1, "Name": 1, "RestartCount": 1, "Driver": 1, "Platform": 1, "MountLabel": 1, "ProcessLabel": 1, "AppArmorProfile": 1, "ExecIDs": 1, "HostConfig": 1, "GraphDriver": 1, "SizeRw": 1, "SizeRootFs": 1, "Mounts": 1, "Config": 1, "NetworkSettings": 1 }, key))), 404: isErrorResponse, 500: isErrorResponse },
};

export type get_ContainerTop = typeof get_ContainerTop;
export const get_ContainerTop = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/containers/{id}/top">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ ps_args: string }> => typia.createIs<Partial<{ ps_args: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ps_args": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<(Partial<{ Titles: Array<string>, Processes: Array<Array<string>> }> | Partial<{ Titles: Array<string>, Processes: Array<Array<string>> }>)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type get_ContainerLogs = typeof get_ContainerLogs;
export const get_ContainerLogs = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/containers/{id}/logs">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ follow: boolean, stdout: boolean, stderr: boolean, since: number, until: number, timestamps: boolean, tail: string }> => typia.createIs<Partial<{ follow: boolean, stdout: boolean, stderr: boolean, since: number, until: number, timestamps: boolean, tail: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "follow": 1, "stdout": 1, "stderr": 1, "since": 1, "until": 1, "timestamps": 1, "tail": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 404: typia.createIs<unknown>(), 500: typia.createIs<unknown>() },
};

export type get_ContainerChanges = typeof get_ContainerChanges;
export const get_ContainerChanges = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/containers/{id}/changes">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<Array<FilesystemChange>>(), 404: isErrorResponse, 500: isErrorResponse },
};

export type get_ContainerExport = typeof get_ContainerExport;
export const get_ContainerExport = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/containers/{id}/export">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | unknown)>(), 500: isErrorResponse },
};

export type get_ContainerStats = typeof get_ContainerStats;
export const get_ContainerStats = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/containers/{id}/stats">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ stream: boolean, "one-shot": boolean }> => typia.createIs<Partial<{ stream: boolean, "one-shot": boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "stream": 1, "one-shot": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<Record<string, unknown>>(), 404: isErrorResponse, 500: isErrorResponse },
};

export type post_ContainerResize = typeof post_ContainerResize;
export const post_ContainerResize = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/{id}/resize">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ h: number, w: number }> => typia.createIs<Partial<{ h: number, w: number }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "h": 1, "w": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | unknown)>(), 500: isErrorResponse },
};

export type post_ContainerStart = typeof post_ContainerStart;
export const post_ContainerStart = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/{id}/start">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ detachKeys: string }> => typia.createIs<Partial<{ detachKeys: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "detachKeys": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 304: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_ContainerStop = typeof post_ContainerStop;
export const post_ContainerStop = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/{id}/stop">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ signal: string, t: number }> => typia.createIs<Partial<{ signal: string, t: number }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "signal": 1, "t": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 304: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_ContainerRestart = typeof post_ContainerRestart;
export const post_ContainerRestart = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/{id}/restart">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ signal: string, t: number }> => typia.createIs<Partial<{ signal: string, t: number }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "signal": 1, "t": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_ContainerKill = typeof post_ContainerKill;
export const post_ContainerKill = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/{id}/kill">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ signal: string }> => typia.createIs<Partial<{ signal: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "signal": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 409: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_ContainerUpdate = typeof post_ContainerUpdate;
export const post_ContainerUpdate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/{id}/update">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: ((input: unknown): input is (Resources & Partial<{ RestartPolicy: RestartPolicy }>) => typia.createIs<(Resources & Partial<{ RestartPolicy: RestartPolicy }>)>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "CpuShares": 1, "Memory": 1, "CgroupParent": 1, "BlkioWeight": 1, "BlkioWeightDevice": 1, "BlkioDeviceReadBps": 1, "BlkioDeviceWriteBps": 1, "BlkioDeviceReadIOps": 1, "BlkioDeviceWriteIOps": 1, "CpuPeriod": 1, "CpuQuota": 1, "CpuRealtimePeriod": 1, "CpuRealtimeRuntime": 1, "CpusetCpus": 1, "CpusetMems": 1, "Devices": 1, "DeviceCgroupRules": 1, "DeviceRequests": 1, "KernelMemoryTCP": 1, "MemoryReservation": 1, "MemorySwap": 1, "MemorySwappiness": 1, "NanoCpus": 1, "OomKillDisable": 1, "Init": 1, "PidsLimit": 1, "Ulimits": 1, "CpuCount": 1, "CpuPercent": 1, "IOMaximumIOps": 1, "IOMaximumBandwidth": 1, "RestartPolicy": 1 }, key))) },
  responses: { 200: ((input: unknown): input is Partial<{ Warnings: Array<string> }> => typia.createIs<Partial<{ Warnings: Array<string> }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Warnings": 1 }, key))), 404: isErrorResponse, 500: isErrorResponse },
};

export type post_ContainerRename = typeof post_ContainerRename;
export const post_ContainerRename = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/{id}/rename">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 409: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_ContainerPause = typeof post_ContainerPause;
export const post_ContainerPause = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/{id}/pause">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_ContainerUnpause = typeof post_ContainerUnpause;
export const post_ContainerUnpause = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/{id}/unpause">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_ContainerAttach = typeof post_ContainerAttach;
export const post_ContainerAttach = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/{id}/attach">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ detachKeys: string, logs: boolean, stream: boolean, stdin: boolean, stdout: boolean, stderr: boolean }> => typia.createIs<Partial<{ detachKeys: string, logs: boolean, stream: boolean, stdin: boolean, stdout: boolean, stderr: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "detachKeys": 1, "logs": 1, "stream": 1, "stdin": 1, "stdout": 1, "stderr": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 101: typia.createIs<unknown>(), 200: typia.createIs<unknown>(), 400: typia.createIs<unknown>(), 404: typia.createIs<unknown>(), 500: typia.createIs<unknown>() },
};

export type get_ContainerAttachWebsocket = typeof get_ContainerAttachWebsocket;
export const get_ContainerAttachWebsocket = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/containers/{id}/attach/ws">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ detachKeys: string, logs: boolean, stream: boolean, stdin: boolean, stdout: boolean, stderr: boolean }> => typia.createIs<Partial<{ detachKeys: string, logs: boolean, stream: boolean, stdin: boolean, stdout: boolean, stderr: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "detachKeys": 1, "logs": 1, "stream": 1, "stdin": 1, "stdout": 1, "stderr": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 101: typia.createIs<unknown>(), 200: typia.createIs<unknown>(), 400: typia.createIs<(ErrorResponse | ErrorResponse)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_ContainerWait = typeof post_ContainerWait;
export const post_ContainerWait = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/{id}/wait">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ condition: ("not-running" | "next-exit" | "removed") }> => typia.createIs<Partial<{ condition: ("not-running" | "next-exit" | "removed") }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "condition": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: isContainerWaitResponse, 400: isErrorResponse, 404: isErrorResponse, 500: isErrorResponse },
};

export type delete_ContainerDelete = typeof delete_ContainerDelete;
export const delete_ContainerDelete = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/containers/{id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ v: boolean, force: boolean, link: boolean }> => typia.createIs<Partial<{ v: boolean, force: boolean, link: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "v": 1, "force": 1, "link": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 400: typia.createIs<(ErrorResponse | ErrorResponse)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 409: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type get_ContainerArchive = typeof get_ContainerArchive;
export const get_ContainerArchive = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/containers/{id}/archive">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { path: string } => typia.createIs<{ path: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "path": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 400: typia.createIs<unknown>(), 404: typia.createIs<unknown>(), 500: typia.createIs<unknown>() },
};

export type put_PutContainerArchive = typeof put_PutContainerArchive;
export const put_PutContainerArchive = {
  method: typia.createIs<"PUT">(),
  path: typia.createIs<"/containers/{id}/archive">(),
  requestFormat: typia.createIs<"binary">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { path: string, noOverwriteDirNonDir?: string, copyUIDGID?: string } => typia.createIs<{ path: string, noOverwriteDirNonDir?: string, copyUIDGID?: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "path": 1, "noOverwriteDirNonDir": 1, "copyUIDGID": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: typia.createIs<Blob>() },
  responses: { 200: typia.createIs<unknown>(), 400: typia.createIs<(ErrorResponse | ErrorResponse)>(), 403: typia.createIs<(ErrorResponse | ErrorResponse)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type head_ContainerArchiveInfo = typeof head_ContainerArchiveInfo;
export const head_ContainerArchiveInfo = {
  method: typia.createIs<"HEAD">(),
  path: typia.createIs<"/containers/{id}/archive">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { path: string } => typia.createIs<{ path: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "path": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 400: typia.createIs<(ErrorResponse | ErrorResponse)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
  responseHeaders: { 200: ((input: unknown): input is { "X-Docker-Container-Path-Stat": string } => typia.createIs<{ "X-Docker-Container-Path-Stat": string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "X-Docker-Container-Path-Stat": 1 }, key))) },
};

export type post_ContainerPrune = typeof post_ContainerPrune;
export const post_ContainerPrune = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/prune">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ filters: string }> => typia.createIs<Partial<{ filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))) },
  responses: { 200: ((input: unknown): input is Partial<{ ContainersDeleted: Array<string>, SpaceReclaimed: number }> => typia.createIs<Partial<{ ContainersDeleted: Array<string>, SpaceReclaimed: number }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ContainersDeleted": 1, "SpaceReclaimed": 1 }, key))), 500: isErrorResponse },
};

export type get_ImageList = typeof get_ImageList;
export const get_ImageList = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/images/json">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ all: boolean, filters: string, "shared-size": boolean, digests: boolean }> => typia.createIs<Partial<{ all: boolean, filters: string, "shared-size": boolean, digests: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "all": 1, "filters": 1, "shared-size": 1, "digests": 1 }, key))) },
  responses: { 200: typia.createIs<Array<ImageSummary>>(), 500: isErrorResponse },
};

export type post_ImageBuild = typeof post_ImageBuild;
export const post_ImageBuild = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/build">(),
  requestFormat: typia.createIs<"binary">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ dockerfile: string, t: string, extrahosts: string, remote: string, q: boolean, nocache: boolean, cachefrom: string, pull: string, rm: boolean, forcerm: boolean, memory: number, memswap: number, cpushares: number, cpusetcpus: string, cpuperiod: number, cpuquota: number, buildargs: string, shmsize: number, squash: boolean, labels: string, networkmode: string, platform: string, target: string, outputs: string }> => typia.createIs<Partial<{ dockerfile: string, t: string, extrahosts: string, remote: string, q: boolean, nocache: boolean, cachefrom: string, pull: string, rm: boolean, forcerm: boolean, memory: number, memswap: number, cpushares: number, cpusetcpus: string, cpuperiod: number, cpuquota: number, buildargs: string, shmsize: number, squash: boolean, labels: string, networkmode: string, platform: string, target: string, outputs: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "dockerfile": 1, "t": 1, "extrahosts": 1, "remote": 1, "q": 1, "nocache": 1, "cachefrom": 1, "pull": 1, "rm": 1, "forcerm": 1, "memory": 1, "memswap": 1, "cpushares": 1, "cpusetcpus": 1, "cpuperiod": 1, "cpuquota": 1, "buildargs": 1, "shmsize": 1, "squash": 1, "labels": 1, "networkmode": 1, "platform": 1, "target": 1, "outputs": 1 }, key))), header: ((input: unknown): input is Partial<{ "Content-type": "application/x-tar", "X-Registry-Config": string }> => typia.createIs<Partial<{ "Content-type": "application/x-tar", "X-Registry-Config": string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Content-type": 1, "X-Registry-Config": 1 }, key))), body: typia.createIs<Blob>() },
  responses: { 200: typia.createIs<unknown>(), 400: isErrorResponse, 500: isErrorResponse },
};

export type post_BuildPrune = typeof post_BuildPrune;
export const post_BuildPrune = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/build/prune">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ "keep-storage": number, all: boolean, filters: string }> => typia.createIs<Partial<{ "keep-storage": number, all: boolean, filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "keep-storage": 1, "all": 1, "filters": 1 }, key))) },
  responses: { 200: ((input: unknown): input is Partial<{ CachesDeleted: Array<string>, SpaceReclaimed: number }> => typia.createIs<Partial<{ CachesDeleted: Array<string>, SpaceReclaimed: number }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "CachesDeleted": 1, "SpaceReclaimed": 1 }, key))), 500: isErrorResponse },
};

export type post_ImageCreate = typeof post_ImageCreate;
export const post_ImageCreate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/images/create">(),
  requestFormat: typia.createIs<"text">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ fromImage: string, fromSrc: string, repo: string, tag: string, message: string, changes: Array<string>, platform: string }> => typia.createIs<Partial<{ fromImage: string, fromSrc: string, repo: string, tag: string, message: string, changes: Array<string>, platform: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "fromImage": 1, "fromSrc": 1, "repo": 1, "tag": 1, "message": 1, "changes": 1, "platform": 1 }, key))), header: ((input: unknown): input is Partial<{ "X-Registry-Auth": string }> => typia.createIs<Partial<{ "X-Registry-Auth": string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "X-Registry-Auth": 1 }, key))), body: typia.createIs<string>() },
  responses: { 200: typia.createIs<unknown>(), 404: isErrorResponse, 500: isErrorResponse },
};

export type get_ImageInspect = typeof get_ImageInspect;
export const get_ImageInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/images/{name}/json">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: isImageInspect, 404: isErrorResponse, 500: isErrorResponse },
};

export type get_ImageHistory = typeof get_ImageHistory;
export const get_ImageHistory = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/images/{name}/history">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: typia.createIs<Array<{ Id: string, Created: number, CreatedBy: string, Tags: Array<string>, Size: number, Comment: string }>>(), 404: isErrorResponse, 500: isErrorResponse },
};

export type post_ImagePush = typeof post_ImagePush;
export const post_ImagePush = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/images/{name}/push">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ tag: string }> => typia.createIs<Partial<{ tag: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "tag": 1 }, key))), path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))), header: ((input: unknown): input is { "X-Registry-Auth": string } => typia.createIs<{ "X-Registry-Auth": string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "X-Registry-Auth": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_ImageTag = typeof post_ImageTag;
export const post_ImageTag = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/images/{name}/tag">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ repo: string, tag: string }> => typia.createIs<Partial<{ repo: string, tag: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "repo": 1, "tag": 1 }, key))), path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 201: typia.createIs<unknown>(), 400: typia.createIs<(ErrorResponse | ErrorResponse)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 409: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type delete_ImageDelete = typeof delete_ImageDelete;
export const delete_ImageDelete = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/images/{name}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ force: boolean, noprune: boolean }> => typia.createIs<Partial<{ force: boolean, noprune: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "force": 1, "noprune": 1 }, key))), path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: typia.createIs<Array<ImageDeleteResponseItem>>(), 404: isErrorResponse, 409: isErrorResponse, 500: isErrorResponse },
};

export type get_ImageSearch = typeof get_ImageSearch;
export const get_ImageSearch = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/images/search">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { term: string, limit?: number, filters?: string } => typia.createIs<{ term: string, limit?: number, filters?: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "term": 1, "limit": 1, "filters": 1 }, key))) },
  responses: { 200: typia.createIs<Array<Partial<{ description: string, is_official: boolean, is_automated: boolean, name: string, star_count: number }>>>(), 500: isErrorResponse },
};

export type post_ImagePrune = typeof post_ImagePrune;
export const post_ImagePrune = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/images/prune">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ filters: string }> => typia.createIs<Partial<{ filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))) },
  responses: { 200: ((input: unknown): input is Partial<{ ImagesDeleted: Array<ImageDeleteResponseItem>, SpaceReclaimed: number }> => typia.createIs<Partial<{ ImagesDeleted: Array<ImageDeleteResponseItem>, SpaceReclaimed: number }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ImagesDeleted": 1, "SpaceReclaimed": 1 }, key))), 500: isErrorResponse },
};

export type post_SystemAuth = typeof post_SystemAuth;
export const post_SystemAuth = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/auth">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: isAuthConfig },
  responses: { 200: ((input: unknown): input is { Status: string, IdentityToken?: string } => typia.createIs<{ Status: string, IdentityToken?: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Status": 1, "IdentityToken": 1 }, key))), 204: typia.createIs<unknown>(), 401: isErrorResponse, 500: isErrorResponse },
};

export type get_SystemInfo = typeof get_SystemInfo;
export const get_SystemInfo = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/info">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { 200: isSystemInfo, 500: isErrorResponse },
};

export type get_SystemVersion = typeof get_SystemVersion;
export const get_SystemVersion = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/version">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { 200: isSystemVersion, 500: isErrorResponse },
};

export type get_SystemPing = typeof get_SystemPing;
export const get_SystemPing = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/_ping">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { 200: typia.createIs<string>(), 500: isErrorResponse },
  responseHeaders: { 200: ((input: unknown): input is { Swarm: ("inactive" | "pending" | "error" | "locked" | "active/worker" | "active/manager"), "Docker-Experimental": boolean, "Cache-Control": string, Pragma: string, "API-Version": string, "Builder-Version": string } => typia.createIs<{ Swarm: ("inactive" | "pending" | "error" | "locked" | "active/worker" | "active/manager"), "Docker-Experimental": boolean, "Cache-Control": string, Pragma: string, "API-Version": string, "Builder-Version": string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Swarm": 1, "Docker-Experimental": 1, "Cache-Control": 1, "Pragma": 1, "API-Version": 1, "Builder-Version": 1 }, key))), 500: ((input: unknown): input is { "Cache-Control": string, Pragma: string } => typia.createIs<{ "Cache-Control": string, Pragma: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Cache-Control": 1, "Pragma": 1 }, key))) },
};

export type head_SystemPingHead = typeof head_SystemPingHead;
export const head_SystemPingHead = {
  method: typia.createIs<"HEAD">(),
  path: typia.createIs<"/_ping">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { 200: typia.createIs<string>(), 500: isErrorResponse },
  responseHeaders: { 200: ((input: unknown): input is { Swarm: ("inactive" | "pending" | "error" | "locked" | "active/worker" | "active/manager"), "Docker-Experimental": boolean, "Cache-Control": string, Pragma: string, "API-Version": string, "Builder-Version": string } => typia.createIs<{ Swarm: ("inactive" | "pending" | "error" | "locked" | "active/worker" | "active/manager"), "Docker-Experimental": boolean, "Cache-Control": string, Pragma: string, "API-Version": string, "Builder-Version": string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Swarm": 1, "Docker-Experimental": 1, "Cache-Control": 1, "Pragma": 1, "API-Version": 1, "Builder-Version": 1 }, key))) },
};

export type post_ImageCommit = typeof post_ImageCommit;
export const post_ImageCommit = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/commit">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ container: string, repo: string, tag: string, comment: string, author: string, pause: boolean, changes: string }> => typia.createIs<Partial<{ container: string, repo: string, tag: string, comment: string, author: string, pause: boolean, changes: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "container": 1, "repo": 1, "tag": 1, "comment": 1, "author": 1, "pause": 1, "changes": 1 }, key))), body: isContainerConfig },
  responses: { 201: isIdResponse, 404: isErrorResponse, 500: isErrorResponse },
};

export type get_SystemEvents = typeof get_SystemEvents;
export const get_SystemEvents = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/events">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ since: string, until: string, filters: string }> => typia.createIs<Partial<{ since: string, until: string, filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "since": 1, "until": 1, "filters": 1 }, key))) },
  responses: { 200: isEventMessage, 400: isErrorResponse, 500: isErrorResponse },
};

export type get_SystemDataUsage = typeof get_SystemDataUsage;
export const get_SystemDataUsage = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/system/df">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ type: Array<("container" | "image" | "volume" | "build-cache")> }> => typia.createIs<Partial<{ type: Array<("container" | "image" | "volume" | "build-cache")> }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "type": 1 }, key))) },
  responses: { 200: typia.createIs<(Partial<{ LayersSize: number, Images: Array<ImageSummary>, Containers: Array<ContainerSummary>, Volumes: Array<Volume>, BuildCache: Array<BuildCache> }> | Partial<{ LayersSize: number, Images: Array<ImageSummary>, Containers: Array<ContainerSummary>, Volumes: Array<Volume>, BuildCache: Array<BuildCache> }>)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type get_ImageGet = typeof get_ImageGet;
export const get_ImageGet = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/images/{name}/get">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 500: typia.createIs<unknown>() },
};

export type get_ImageGetAll = typeof get_ImageGetAll;
export const get_ImageGetAll = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/images/get">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ names: Array<string> }> => typia.createIs<Partial<{ names: Array<string> }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "names": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 500: typia.createIs<unknown>() },
};

export type post_ImageLoad = typeof post_ImageLoad;
export const post_ImageLoad = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/images/load">(),
  requestFormat: typia.createIs<"text">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ quiet: boolean }> => typia.createIs<Partial<{ quiet: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "quiet": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 500: isErrorResponse },
};

export type post_ContainerExec = typeof post_ContainerExec;
export const post_ContainerExec = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/containers/{id}/exec">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: ((input: unknown): input is Partial<{ AttachStdin: boolean, AttachStdout: boolean, AttachStderr: boolean, ConsoleSize: (Array<number> | null), DetachKeys: string, Tty: boolean, Env: Array<string>, Cmd: Array<string>, Privileged: boolean, User: string, WorkingDir: string }> => typia.createIs<Partial<{ AttachStdin: boolean, AttachStdout: boolean, AttachStderr: boolean, ConsoleSize: (Array<number> | null), DetachKeys: string, Tty: boolean, Env: Array<string>, Cmd: Array<string>, Privileged: boolean, User: string, WorkingDir: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "AttachStdin": 1, "AttachStdout": 1, "AttachStderr": 1, "ConsoleSize": 1, "DetachKeys": 1, "Tty": 1, "Env": 1, "Cmd": 1, "Privileged": 1, "User": 1, "WorkingDir": 1 }, key))) },
  responses: { 201: isIdResponse, 404: isErrorResponse, 409: isErrorResponse, 500: isErrorResponse },
};

export type post_ExecStart = typeof post_ExecStart;
export const post_ExecStart = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/exec/{id}/start">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: ((input: unknown): input is Partial<{ Detach: boolean, Tty: boolean, ConsoleSize: (Array<number> | null) }> => typia.createIs<Partial<{ Detach: boolean, Tty: boolean, ConsoleSize: (Array<number> | null) }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Detach": 1, "Tty": 1, "ConsoleSize": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 404: typia.createIs<unknown>(), 409: typia.createIs<unknown>() },
};

export type post_ExecResize = typeof post_ExecResize;
export const post_ExecResize = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/exec/{id}/resize">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ h: number, w: number }> => typia.createIs<Partial<{ h: number, w: number }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "h": 1, "w": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 400: typia.createIs<(ErrorResponse | ErrorResponse)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type get_ExecInspect = typeof get_ExecInspect;
export const get_ExecInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/exec/{id}/json">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: ((input: unknown): input is Partial<{ CanRemove: boolean, DetachKeys: string, ID: string, Running: boolean, ExitCode: number, ProcessConfig: ProcessConfig, OpenStdin: boolean, OpenStderr: boolean, OpenStdout: boolean, ContainerID: string, Pid: number }> => typia.createIs<Partial<{ CanRemove: boolean, DetachKeys: string, ID: string, Running: boolean, ExitCode: number, ProcessConfig: ProcessConfig, OpenStdin: boolean, OpenStderr: boolean, OpenStdout: boolean, ContainerID: string, Pid: number }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "CanRemove": 1, "DetachKeys": 1, "ID": 1, "Running": 1, "ExitCode": 1, "ProcessConfig": 1, "OpenStdin": 1, "OpenStderr": 1, "OpenStdout": 1, "ContainerID": 1, "Pid": 1 }, key))), 404: isErrorResponse, 500: isErrorResponse },
};

export type get_VolumeList = typeof get_VolumeList;
export const get_VolumeList = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/volumes">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ filters: string }> => typia.createIs<Partial<{ filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))) },
  responses: { 200: isVolumeListResponse, 500: isErrorResponse },
};

export type post_VolumeCreate = typeof post_VolumeCreate;
export const post_VolumeCreate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/volumes/create">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: isVolumeCreateOptions },
  responses: { 201: isVolume, 500: isErrorResponse },
};

export type get_VolumeInspect = typeof get_VolumeInspect;
export const get_VolumeInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/volumes/{name}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: isVolume, 404: isErrorResponse, 500: isErrorResponse },
};

export type put_VolumeUpdate = typeof put_VolumeUpdate;
export const put_VolumeUpdate = {
  method: typia.createIs<"PUT">(),
  path: typia.createIs<"/volumes/{name}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { version: number } => typia.createIs<{ version: number }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "version": 1 }, key))), path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))), body: ((input: unknown): input is Partial<{ Spec: ClusterVolumeSpec }> => typia.createIs<Partial<{ Spec: ClusterVolumeSpec }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Spec": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 400: isErrorResponse, 404: isErrorResponse, 500: isErrorResponse, 503: isErrorResponse },
};

export type delete_VolumeDelete = typeof delete_VolumeDelete;
export const delete_VolumeDelete = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/volumes/{name}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ force: boolean }> => typia.createIs<Partial<{ force: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "force": 1 }, key))), path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 409: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_VolumePrune = typeof post_VolumePrune;
export const post_VolumePrune = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/volumes/prune">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ filters: string }> => typia.createIs<Partial<{ filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))) },
  responses: { 200: ((input: unknown): input is Partial<{ VolumesDeleted: Array<string>, SpaceReclaimed: number }> => typia.createIs<Partial<{ VolumesDeleted: Array<string>, SpaceReclaimed: number }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "VolumesDeleted": 1, "SpaceReclaimed": 1 }, key))), 500: isErrorResponse },
};

export type get_NetworkList = typeof get_NetworkList;
export const get_NetworkList = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/networks">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ filters: string }> => typia.createIs<Partial<{ filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))) },
  responses: { 200: typia.createIs<Array<Network>>(), 500: isErrorResponse },
};

export type get_NetworkInspect = typeof get_NetworkInspect;
export const get_NetworkInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/networks/{id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ verbose: boolean, scope: string }> => typia.createIs<Partial<{ verbose: boolean, scope: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "verbose": 1, "scope": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: isNetwork, 404: isErrorResponse, 500: isErrorResponse },
};

export type delete_NetworkDelete = typeof delete_NetworkDelete;
export const delete_NetworkDelete = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/networks/{id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 403: typia.createIs<(ErrorResponse | ErrorResponse)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_NetworkCreate = typeof post_NetworkCreate;
export const post_NetworkCreate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/networks/create">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: ((input: unknown): input is { Name: string, CheckDuplicate?: boolean, Driver?: string, Internal?: boolean, Attachable?: boolean, Ingress?: boolean, IPAM?: IPAM, EnableIPv6?: boolean, Options?: Record<string, string>, Labels?: Record<string, string> } => typia.createIs<{ Name: string, CheckDuplicate?: boolean, Driver?: string, Internal?: boolean, Attachable?: boolean, Ingress?: boolean, IPAM?: IPAM, EnableIPv6?: boolean, Options?: Record<string, string>, Labels?: Record<string, string> }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "CheckDuplicate": 1, "Driver": 1, "Internal": 1, "Attachable": 1, "Ingress": 1, "IPAM": 1, "EnableIPv6": 1, "Options": 1, "Labels": 1 }, key))) },
  responses: { 201: ((input: unknown): input is Partial<{ Id: string, Warning: string }> => typia.createIs<Partial<{ Id: string, Warning: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "Warning": 1 }, key))), 403: isErrorResponse, 404: isErrorResponse, 500: isErrorResponse },
};

export type post_NetworkConnect = typeof post_NetworkConnect;
export const post_NetworkConnect = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/networks/{id}/connect">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: ((input: unknown): input is Partial<{ Container: string, EndpointConfig: EndpointSettings }> => typia.createIs<Partial<{ Container: string, EndpointConfig: EndpointSettings }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Container": 1, "EndpointConfig": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 403: typia.createIs<(ErrorResponse | ErrorResponse)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_NetworkDisconnect = typeof post_NetworkDisconnect;
export const post_NetworkDisconnect = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/networks/{id}/disconnect">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: ((input: unknown): input is Partial<{ Container: string, Force: boolean }> => typia.createIs<Partial<{ Container: string, Force: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "Container": 1, "Force": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 403: typia.createIs<(ErrorResponse | ErrorResponse)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_NetworkPrune = typeof post_NetworkPrune;
export const post_NetworkPrune = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/networks/prune">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ filters: string }> => typia.createIs<Partial<{ filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))) },
  responses: { 200: ((input: unknown): input is Partial<{ NetworksDeleted: Array<string> }> => typia.createIs<Partial<{ NetworksDeleted: Array<string> }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "NetworksDeleted": 1 }, key))), 500: isErrorResponse },
};

export type get_PluginList = typeof get_PluginList;
export const get_PluginList = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/plugins">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ filters: string }> => typia.createIs<Partial<{ filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))) },
  responses: { 200: typia.createIs<Array<Plugin>>(), 500: isErrorResponse },
};

export type get_GetPluginPrivileges = typeof get_GetPluginPrivileges;
export const get_GetPluginPrivileges = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/plugins/privileges">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { remote: string } => typia.createIs<{ remote: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "remote": 1 }, key))) },
  responses: { 200: typia.createIs<(Array<PluginPrivilege> | Array<PluginPrivilege>)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_PluginPull = typeof post_PluginPull;
export const post_PluginPull = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/plugins/pull">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { remote: string, name?: string } => typia.createIs<{ remote: string, name?: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "remote": 1, "name": 1 }, key))), header: ((input: unknown): input is Partial<{ "X-Registry-Auth": string }> => typia.createIs<Partial<{ "X-Registry-Auth": string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "X-Registry-Auth": 1 }, key))), body: typia.createIs<Array<PluginPrivilege>>() },
  responses: { 204: typia.createIs<unknown>(), 500: isErrorResponse },
};

export type get_PluginInspect = typeof get_PluginInspect;
export const get_PluginInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/plugins/{name}/json">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: typia.createIs<(Plugin | Plugin)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type delete_PluginDelete = typeof delete_PluginDelete;
export const delete_PluginDelete = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/plugins/{name}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ force: boolean }> => typia.createIs<Partial<{ force: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "force": 1 }, key))), path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: typia.createIs<(Plugin | Plugin)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_PluginEnable = typeof post_PluginEnable;
export const post_PluginEnable = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/plugins/{name}/enable">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ timeout: number }> => typia.createIs<Partial<{ timeout: number }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "timeout": 1 }, key))), path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_PluginDisable = typeof post_PluginDisable;
export const post_PluginDisable = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/plugins/{name}/disable">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ force: boolean }> => typia.createIs<Partial<{ force: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "force": 1 }, key))), path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_PluginUpgrade = typeof post_PluginUpgrade;
export const post_PluginUpgrade = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/plugins/{name}/upgrade">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { remote: string } => typia.createIs<{ remote: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "remote": 1 }, key))), path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))), header: ((input: unknown): input is Partial<{ "X-Registry-Auth": string }> => typia.createIs<Partial<{ "X-Registry-Auth": string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "X-Registry-Auth": 1 }, key))), body: typia.createIs<Array<PluginPrivilege>>() },
  responses: { 204: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_PluginCreate = typeof post_PluginCreate;
export const post_PluginCreate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/plugins/create">(),
  requestFormat: typia.createIs<"text">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_PluginPush = typeof post_PluginPush;
export const post_PluginPush = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/plugins/{name}/push">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_PluginSet = typeof post_PluginSet;
export const post_PluginSet = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/plugins/{name}/set">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))), body: typia.createIs<Array<string>>() },
  responses: { 204: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type get_NodeList = typeof get_NodeList;
export const get_NodeList = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/nodes">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ filters: string }> => typia.createIs<Partial<{ filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))) },
  responses: { 200: typia.createIs<(Array<Node> | Array<Node>)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type get_NodeInspect = typeof get_NodeInspect;
export const get_NodeInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/nodes/{id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<(Node | Node)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type delete_NodeDelete = typeof delete_NodeDelete;
export const delete_NodeDelete = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/nodes/{id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ force: boolean }> => typia.createIs<Partial<{ force: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "force": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_NodeUpdate = typeof post_NodeUpdate;
export const post_NodeUpdate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/nodes/{id}/update">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { version: number } => typia.createIs<{ version: number }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "version": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: isNodeSpec },
  responses: { 200: typia.createIs<unknown>(), 400: typia.createIs<(ErrorResponse | ErrorResponse)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type get_SwarmInspect = typeof get_SwarmInspect;
export const get_SwarmInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/swarm">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { 200: typia.createIs<(Swarm | Swarm)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_SwarmInit = typeof post_SwarmInit;
export const post_SwarmInit = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/swarm/init">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: ((input: unknown): input is Partial<{ ListenAddr: string, AdvertiseAddr: string, DataPathAddr: string, DataPathPort: number, DefaultAddrPool: Array<string>, ForceNewCluster: boolean, SubnetSize: number, Spec: SwarmSpec }> => typia.createIs<Partial<{ ListenAddr: string, AdvertiseAddr: string, DataPathAddr: string, DataPathPort: number, DefaultAddrPool: Array<string>, ForceNewCluster: boolean, SubnetSize: number, Spec: SwarmSpec }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ListenAddr": 1, "AdvertiseAddr": 1, "DataPathAddr": 1, "DataPathPort": 1, "DefaultAddrPool": 1, "ForceNewCluster": 1, "SubnetSize": 1, "Spec": 1 }, key))) },
  responses: { 200: typia.createIs<(string | string)>(), 400: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_SwarmJoin = typeof post_SwarmJoin;
export const post_SwarmJoin = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/swarm/join">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: ((input: unknown): input is Partial<{ ListenAddr: string, AdvertiseAddr: string, DataPathAddr: string, RemoteAddrs: Array<string>, JoinToken: string }> => typia.createIs<Partial<{ ListenAddr: string, AdvertiseAddr: string, DataPathAddr: string, RemoteAddrs: Array<string>, JoinToken: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ListenAddr": 1, "AdvertiseAddr": 1, "DataPathAddr": 1, "RemoteAddrs": 1, "JoinToken": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 400: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_SwarmLeave = typeof post_SwarmLeave;
export const post_SwarmLeave = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/swarm/leave">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ force: boolean }> => typia.createIs<Partial<{ force: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "force": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_SwarmUpdate = typeof post_SwarmUpdate;
export const post_SwarmUpdate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/swarm/update">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { version: number, rotateWorkerToken?: boolean, rotateManagerToken?: boolean, rotateManagerUnlockKey?: boolean } => typia.createIs<{ version: number, rotateWorkerToken?: boolean, rotateManagerToken?: boolean, rotateManagerUnlockKey?: boolean }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "version": 1, "rotateWorkerToken": 1, "rotateManagerToken": 1, "rotateManagerUnlockKey": 1 }, key))), body: isSwarmSpec },
  responses: { 200: typia.createIs<unknown>(), 400: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type get_SwarmUnlockkey = typeof get_SwarmUnlockkey;
export const get_SwarmUnlockkey = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/swarm/unlockkey">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { 200: typia.createIs<(Partial<{ UnlockKey: string }> | Partial<{ UnlockKey: string }>)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_SwarmUnlock = typeof post_SwarmUnlock;
export const post_SwarmUnlock = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/swarm/unlock">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: ((input: unknown): input is Partial<{ UnlockKey: string }> => typia.createIs<Partial<{ UnlockKey: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "UnlockKey": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 500: isErrorResponse, 503: isErrorResponse },
};

export type get_ServiceList = typeof get_ServiceList;
export const get_ServiceList = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/services">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ filters: string, status: boolean }> => typia.createIs<Partial<{ filters: string, status: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1, "status": 1 }, key))) },
  responses: { 200: typia.createIs<(Array<Service> | Array<Service>)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_ServiceCreate = typeof post_ServiceCreate;
export const post_ServiceCreate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/services/create">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: ((input: unknown): input is Partial<{ "X-Registry-Auth": string }> => typia.createIs<Partial<{ "X-Registry-Auth": string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "X-Registry-Auth": 1 }, key))), body: typia.createIs<(ServiceSpec & Record<string, unknown>)>() },
  responses: { 201: ((input: unknown): input is Partial<{ ID: string, Warning: string }> => typia.createIs<Partial<{ ID: string, Warning: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Warning": 1 }, key))), 400: isErrorResponse, 403: isErrorResponse, 409: isErrorResponse, 500: isErrorResponse, 503: isErrorResponse },
};

export type get_ServiceInspect = typeof get_ServiceInspect;
export const get_ServiceInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/services/{id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ insertDefaults: boolean }> => typia.createIs<Partial<{ insertDefaults: boolean }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "insertDefaults": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<(Service | Service)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type delete_ServiceDelete = typeof delete_ServiceDelete;
export const delete_ServiceDelete = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/services/{id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type post_ServiceUpdate = typeof post_ServiceUpdate;
export const post_ServiceUpdate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/services/{id}/update">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { version: number, registryAuthFrom?: ("spec" | "previous-spec"), rollback?: string } => typia.createIs<{ version: number, registryAuthFrom?: ("spec" | "previous-spec"), rollback?: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "version": 1, "registryAuthFrom": 1, "rollback": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), header: ((input: unknown): input is Partial<{ "X-Registry-Auth": string }> => typia.createIs<Partial<{ "X-Registry-Auth": string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "X-Registry-Auth": 1 }, key))), body: typia.createIs<(ServiceSpec & Record<string, unknown>)>() },
  responses: { 200: isServiceUpdateResponse, 400: isErrorResponse, 404: isErrorResponse, 500: isErrorResponse, 503: isErrorResponse },
};

export type get_ServiceLogs = typeof get_ServiceLogs;
export const get_ServiceLogs = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/services/{id}/logs">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ details: boolean, follow: boolean, stdout: boolean, stderr: boolean, since: number, timestamps: boolean, tail: string }> => typia.createIs<Partial<{ details: boolean, follow: boolean, stdout: boolean, stderr: boolean, since: number, timestamps: boolean, tail: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "details": 1, "follow": 1, "stdout": 1, "stderr": 1, "since": 1, "timestamps": 1, "tail": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 404: typia.createIs<unknown>(), 500: typia.createIs<unknown>(), 503: typia.createIs<unknown>() },
};

export type get_TaskList = typeof get_TaskList;
export const get_TaskList = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/tasks">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ filters: string }> => typia.createIs<Partial<{ filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))) },
  responses: { 200: typia.createIs<Array<Task>>(), 500: isErrorResponse, 503: isErrorResponse },
};

export type get_TaskInspect = typeof get_TaskInspect;
export const get_TaskInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/tasks/{id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: isTask, 404: isErrorResponse, 500: isErrorResponse, 503: isErrorResponse },
};

export type get_TaskLogs = typeof get_TaskLogs;
export const get_TaskLogs = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/tasks/{id}/logs">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ details: boolean, follow: boolean, stdout: boolean, stderr: boolean, since: number, timestamps: boolean, tail: string }> => typia.createIs<Partial<{ details: boolean, follow: boolean, stdout: boolean, stderr: boolean, since: number, timestamps: boolean, tail: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "details": 1, "follow": 1, "stdout": 1, "stderr": 1, "since": 1, "timestamps": 1, "tail": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: typia.createIs<unknown>(), 404: typia.createIs<unknown>(), 500: typia.createIs<unknown>(), 503: typia.createIs<unknown>() },
};

export type get_SecretList = typeof get_SecretList;
export const get_SecretList = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/secrets">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ filters: string }> => typia.createIs<Partial<{ filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))) },
  responses: { 200: typia.createIs<Array<Secret>>(), 500: isErrorResponse, 503: isErrorResponse },
};

export type post_SecretCreate = typeof post_SecretCreate;
export const post_SecretCreate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/secrets/create">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: typia.createIs<(SecretSpec & Record<string, unknown>)>() },
  responses: { 201: isIdResponse, 409: isErrorResponse, 500: isErrorResponse, 503: isErrorResponse },
};

export type get_SecretInspect = typeof get_SecretInspect;
export const get_SecretInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/secrets/{id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: isSecret, 404: isErrorResponse, 500: isErrorResponse, 503: isErrorResponse },
};

export type delete_SecretDelete = typeof delete_SecretDelete;
export const delete_SecretDelete = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/secrets/{id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 404: isErrorResponse, 500: isErrorResponse, 503: isErrorResponse },
};

export type post_SecretUpdate = typeof post_SecretUpdate;
export const post_SecretUpdate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/secrets/{id}/update">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { version: number } => typia.createIs<{ version: number }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "version": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: isSecretSpec },
  responses: { 200: typia.createIs<unknown>(), 400: typia.createIs<(ErrorResponse | ErrorResponse)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type get_ConfigList = typeof get_ConfigList;
export const get_ConfigList = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/configs">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is Partial<{ filters: string }> => typia.createIs<Partial<{ filters: string }>>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))) },
  responses: { 200: typia.createIs<Array<Config>>(), 500: isErrorResponse, 503: isErrorResponse },
};

export type post_ConfigCreate = typeof post_ConfigCreate;
export const post_ConfigCreate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/configs/create">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: typia.createIs<(ConfigSpec & Record<string, unknown>)>() },
  responses: { 201: isIdResponse, 409: isErrorResponse, 500: isErrorResponse, 503: isErrorResponse },
};

export type get_ConfigInspect = typeof get_ConfigInspect;
export const get_ConfigInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/configs/{id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: isConfig, 404: isErrorResponse, 500: isErrorResponse, 503: isErrorResponse },
};

export type delete_ConfigDelete = typeof delete_ConfigDelete;
export const delete_ConfigDelete = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/configs/{id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: typia.createIs<unknown>(), 404: isErrorResponse, 500: isErrorResponse, 503: isErrorResponse },
};

export type post_ConfigUpdate = typeof post_ConfigUpdate;
export const post_ConfigUpdate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/configs/{id}/update">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: ((input: unknown): input is { version: number } => typia.createIs<{ version: number }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "version": 1 }, key))), path: ((input: unknown): input is { id: string } => typia.createIs<{ id: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: isConfigSpec },
  responses: { 200: typia.createIs<unknown>(), 400: typia.createIs<(ErrorResponse | ErrorResponse)>(), 404: typia.createIs<(ErrorResponse | ErrorResponse)>(), 500: typia.createIs<(ErrorResponse | ErrorResponse)>(), 503: typia.createIs<(ErrorResponse | ErrorResponse)>() },
};

export type get_DistributionInspect = typeof get_DistributionInspect;
export const get_DistributionInspect = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/distribution/{name}/json">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: ((input: unknown): input is { name: string } => typia.createIs<{ name: string }>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: isDistributionInspect, 401: isErrorResponse, 500: isErrorResponse },
};

export type post_Session = typeof post_Session;
export const post_Session = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/session">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { 101: typia.createIs<unknown>(), 400: typia.createIs<unknown>(), 500: typia.createIs<unknown>() },
};

// </Endpoints>

  
     // <EndpointByMethod>
     export const EndpointByMethod = {
     get: {
           "/containers/json": get_ContainerList,
"/containers/{id}/json": get_ContainerInspect,
"/containers/{id}/top": get_ContainerTop,
"/containers/{id}/logs": get_ContainerLogs,
"/containers/{id}/changes": get_ContainerChanges,
"/containers/{id}/export": get_ContainerExport,
"/containers/{id}/stats": get_ContainerStats,
"/containers/{id}/attach/ws": get_ContainerAttachWebsocket,
"/containers/{id}/archive": get_ContainerArchive,
"/images/json": get_ImageList,
"/images/{name}/json": get_ImageInspect,
"/images/{name}/history": get_ImageHistory,
"/images/search": get_ImageSearch,
"/info": get_SystemInfo,
"/version": get_SystemVersion,
"/_ping": get_SystemPing,
"/events": get_SystemEvents,
"/system/df": get_SystemDataUsage,
"/images/{name}/get": get_ImageGet,
"/images/get": get_ImageGetAll,
"/exec/{id}/json": get_ExecInspect,
"/volumes": get_VolumeList,
"/volumes/{name}": get_VolumeInspect,
"/networks": get_NetworkList,
"/networks/{id}": get_NetworkInspect,
"/plugins": get_PluginList,
"/plugins/privileges": get_GetPluginPrivileges,
"/plugins/{name}/json": get_PluginInspect,
"/nodes": get_NodeList,
"/nodes/{id}": get_NodeInspect,
"/swarm": get_SwarmInspect,
"/swarm/unlockkey": get_SwarmUnlockkey,
"/services": get_ServiceList,
"/services/{id}": get_ServiceInspect,
"/services/{id}/logs": get_ServiceLogs,
"/tasks": get_TaskList,
"/tasks/{id}": get_TaskInspect,
"/tasks/{id}/logs": get_TaskLogs,
"/secrets": get_SecretList,
"/secrets/{id}": get_SecretInspect,
"/configs": get_ConfigList,
"/configs/{id}": get_ConfigInspect,
"/distribution/{name}/json": get_DistributionInspect
         },
post: {
           "/containers/create": post_ContainerCreate,
"/containers/{id}/resize": post_ContainerResize,
"/containers/{id}/start": post_ContainerStart,
"/containers/{id}/stop": post_ContainerStop,
"/containers/{id}/restart": post_ContainerRestart,
"/containers/{id}/kill": post_ContainerKill,
"/containers/{id}/update": post_ContainerUpdate,
"/containers/{id}/rename": post_ContainerRename,
"/containers/{id}/pause": post_ContainerPause,
"/containers/{id}/unpause": post_ContainerUnpause,
"/containers/{id}/attach": post_ContainerAttach,
"/containers/{id}/wait": post_ContainerWait,
"/containers/prune": post_ContainerPrune,
"/build": post_ImageBuild,
"/build/prune": post_BuildPrune,
"/images/create": post_ImageCreate,
"/images/{name}/push": post_ImagePush,
"/images/{name}/tag": post_ImageTag,
"/images/prune": post_ImagePrune,
"/auth": post_SystemAuth,
"/commit": post_ImageCommit,
"/images/load": post_ImageLoad,
"/containers/{id}/exec": post_ContainerExec,
"/exec/{id}/start": post_ExecStart,
"/exec/{id}/resize": post_ExecResize,
"/volumes/create": post_VolumeCreate,
"/volumes/prune": post_VolumePrune,
"/networks/create": post_NetworkCreate,
"/networks/{id}/connect": post_NetworkConnect,
"/networks/{id}/disconnect": post_NetworkDisconnect,
"/networks/prune": post_NetworkPrune,
"/plugins/pull": post_PluginPull,
"/plugins/{name}/enable": post_PluginEnable,
"/plugins/{name}/disable": post_PluginDisable,
"/plugins/{name}/upgrade": post_PluginUpgrade,
"/plugins/create": post_PluginCreate,
"/plugins/{name}/push": post_PluginPush,
"/plugins/{name}/set": post_PluginSet,
"/nodes/{id}/update": post_NodeUpdate,
"/swarm/init": post_SwarmInit,
"/swarm/join": post_SwarmJoin,
"/swarm/leave": post_SwarmLeave,
"/swarm/update": post_SwarmUpdate,
"/swarm/unlock": post_SwarmUnlock,
"/services/create": post_ServiceCreate,
"/services/{id}/update": post_ServiceUpdate,
"/secrets/create": post_SecretCreate,
"/secrets/{id}/update": post_SecretUpdate,
"/configs/create": post_ConfigCreate,
"/configs/{id}/update": post_ConfigUpdate,
"/session": post_Session
         },
delete: {
           "/containers/{id}": delete_ContainerDelete,
"/images/{name}": delete_ImageDelete,
"/volumes/{name}": delete_VolumeDelete,
"/networks/{id}": delete_NetworkDelete,
"/plugins/{name}": delete_PluginDelete,
"/nodes/{id}": delete_NodeDelete,
"/services/{id}": delete_ServiceDelete,
"/secrets/{id}": delete_SecretDelete,
"/configs/{id}": delete_ConfigDelete
         },
put: {
           "/containers/{id}/archive": put_PutContainerArchive,
"/volumes/{name}": put_VolumeUpdate
         },
head: {
           "/containers/{id}/archive": head_ContainerArchiveInfo,
"/_ping": head_SystemPingHead
         }
     }
     export type EndpointByMethod = typeof EndpointByMethod;
     // </EndpointByMethod>
     

    // <EndpointByMethod.Shorthands>
    export type GetEndpoints = EndpointByMethod["get"]
export type PostEndpoints = EndpointByMethod["post"]
export type DeleteEndpoints = EndpointByMethod["delete"]
export type PutEndpoints = EndpointByMethod["put"]
export type HeadEndpoints = EndpointByMethod["head"]
    // </EndpointByMethod.Shorthands>
    
  
// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: unknown;
  header?: unknown;
  path?: unknown;
  cookie?: unknown;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | "trace" | MutationMethod;

export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
export type ResponseFormat = "json" | "sse";
export type SecurityRequirements = readonly (readonly string[])[];


    // <EndpointRequestFormats>
    /** Non-json request body encodings; missing entries default to `"json"`. */
    export const endpointRequestFormats = {
    post: {
          "/build": "binary",
"/images/create": "text",
"/images/load": "text",
"/plugins/create": "text"
        },
put: {
          "/containers/{id}/archive": "binary"
        }
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: RequestFormat }> }>;
    // </EndpointRequestFormats>
    

    // <EndpointParameterStyles>
    export type ParameterSerialization = { style: string; explode: boolean; allowReserved: boolean };
    export type EndpointParameterStyles = Partial<Record<"query" | "path" | "header" | "cookie", Record<string, ParameterSerialization>>>;
    /** OpenAPI parameter styles used by the built-in encoders. */
    export const endpointParameterStyles = {"get":{"/containers/json":{"query":{"all":{"style":"form","explode":true,"allowReserved":false},"limit":{"style":"form","explode":true,"allowReserved":false},"size":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false}}},"/containers/{id}/json":{"query":{"size":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/top":{"query":{"ps_args":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/logs":{"query":{"follow":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false},"since":{"style":"form","explode":true,"allowReserved":false},"until":{"style":"form","explode":true,"allowReserved":false},"timestamps":{"style":"form","explode":true,"allowReserved":false},"tail":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/changes":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/export":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/stats":{"query":{"stream":{"style":"form","explode":true,"allowReserved":false},"one-shot":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/attach/ws":{"query":{"detachKeys":{"style":"form","explode":true,"allowReserved":false},"logs":{"style":"form","explode":true,"allowReserved":false},"stream":{"style":"form","explode":true,"allowReserved":false},"stdin":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/archive":{"query":{"path":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/images/json":{"query":{"all":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false},"shared-size":{"style":"form","explode":true,"allowReserved":false},"digests":{"style":"form","explode":true,"allowReserved":false}}},"/images/{name}/json":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/images/{name}/history":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/images/search":{"query":{"term":{"style":"form","explode":true,"allowReserved":false},"limit":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false}}},"/events":{"query":{"since":{"style":"form","explode":true,"allowReserved":false},"until":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false}}},"/system/df":{"query":{"type":{"style":"form","explode":true,"allowReserved":false}}},"/images/{name}/get":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/images/get":{"query":{"names":{"style":"form","explode":false,"allowReserved":false}}},"/exec/{id}/json":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/volumes":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/volumes/{name}":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/networks":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/networks/{id}":{"query":{"verbose":{"style":"form","explode":true,"allowReserved":false},"scope":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/plugins/privileges":{"query":{"remote":{"style":"form","explode":true,"allowReserved":false}}},"/plugins/{name}/json":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/nodes":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/nodes/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/services":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false},"status":{"style":"form","explode":true,"allowReserved":false}}},"/services/{id}":{"query":{"insertDefaults":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/services/{id}/logs":{"query":{"details":{"style":"form","explode":true,"allowReserved":false},"follow":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false},"since":{"style":"form","explode":true,"allowReserved":false},"timestamps":{"style":"form","explode":true,"allowReserved":false},"tail":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/tasks":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/tasks/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/tasks/{id}/logs":{"query":{"details":{"style":"form","explode":true,"allowReserved":false},"follow":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false},"since":{"style":"form","explode":true,"allowReserved":false},"timestamps":{"style":"form","explode":true,"allowReserved":false},"tail":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/secrets":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/secrets/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/configs":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/configs/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/distribution/{name}/json":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}}},"post":{"/containers/create":{"query":{"name":{"style":"form","explode":true,"allowReserved":false},"platform":{"style":"form","explode":true,"allowReserved":false}}},"/containers/{id}/resize":{"query":{"h":{"style":"form","explode":true,"allowReserved":false},"w":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/start":{"query":{"detachKeys":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/stop":{"query":{"signal":{"style":"form","explode":true,"allowReserved":false},"t":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/restart":{"query":{"signal":{"style":"form","explode":true,"allowReserved":false},"t":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/kill":{"query":{"signal":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/update":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/rename":{"query":{"name":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/pause":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/unpause":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/attach":{"query":{"detachKeys":{"style":"form","explode":true,"allowReserved":false},"logs":{"style":"form","explode":true,"allowReserved":false},"stream":{"style":"form","explode":true,"allowReserved":false},"stdin":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/wait":{"query":{"condition":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/prune":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/build":{"query":{"dockerfile":{"style":"form","explode":true,"allowReserved":false},"t":{"style":"form","explode":true,"allowReserved":false},"extrahosts":{"style":"form","explode":true,"allowReserved":false},"remote":{"style":"form","explode":true,"allowReserved":false},"q":{"style":"form","explode":true,"allowReserved":false},"nocache":{"style":"form","explode":true,"allowReserved":false},"cachefrom":{"style":"form","explode":true,"allowReserved":false},"pull":{"style":"form","explode":true,"allowReserved":false},"rm":{"style":"form","explode":true,"allowReserved":false},"forcerm":{"style":"form","explode":true,"allowReserved":false},"memory":{"style":"form","explode":true,"allowReserved":false},"memswap":{"style":"form","explode":true,"allowReserved":false},"cpushares":{"style":"form","explode":true,"allowReserved":false},"cpusetcpus":{"style":"form","explode":true,"allowReserved":false},"cpuperiod":{"style":"form","explode":true,"allowReserved":false},"cpuquota":{"style":"form","explode":true,"allowReserved":false},"buildargs":{"style":"form","explode":true,"allowReserved":false},"shmsize":{"style":"form","explode":true,"allowReserved":false},"squash":{"style":"form","explode":true,"allowReserved":false},"labels":{"style":"form","explode":true,"allowReserved":false},"networkmode":{"style":"form","explode":true,"allowReserved":false},"platform":{"style":"form","explode":true,"allowReserved":false},"target":{"style":"form","explode":true,"allowReserved":false},"outputs":{"style":"form","explode":true,"allowReserved":false}},"header":{"Content-type":{"style":"simple","explode":false,"allowReserved":false},"X-Registry-Config":{"style":"simple","explode":false,"allowReserved":false}}},"/build/prune":{"query":{"keep-storage":{"style":"form","explode":true,"allowReserved":false},"all":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false}}},"/images/create":{"query":{"fromImage":{"style":"form","explode":true,"allowReserved":false},"fromSrc":{"style":"form","explode":true,"allowReserved":false},"repo":{"style":"form","explode":true,"allowReserved":false},"tag":{"style":"form","explode":true,"allowReserved":false},"message":{"style":"form","explode":true,"allowReserved":false},"changes":{"style":"form","explode":false,"allowReserved":false},"platform":{"style":"form","explode":true,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/images/{name}/push":{"query":{"tag":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/images/{name}/tag":{"query":{"repo":{"style":"form","explode":true,"allowReserved":false},"tag":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/images/prune":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/commit":{"query":{"container":{"style":"form","explode":true,"allowReserved":false},"repo":{"style":"form","explode":true,"allowReserved":false},"tag":{"style":"form","explode":true,"allowReserved":false},"comment":{"style":"form","explode":true,"allowReserved":false},"author":{"style":"form","explode":true,"allowReserved":false},"pause":{"style":"form","explode":true,"allowReserved":false},"changes":{"style":"form","explode":true,"allowReserved":false}}},"/images/load":{"query":{"quiet":{"style":"form","explode":true,"allowReserved":false}}},"/containers/{id}/exec":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/exec/{id}/start":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/exec/{id}/resize":{"query":{"h":{"style":"form","explode":true,"allowReserved":false},"w":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/volumes/prune":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/networks/{id}/connect":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/networks/{id}/disconnect":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/networks/prune":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/plugins/pull":{"query":{"remote":{"style":"form","explode":true,"allowReserved":false},"name":{"style":"form","explode":true,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}/enable":{"query":{"timeout":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}/disable":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}/upgrade":{"query":{"remote":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/create":{"query":{"name":{"style":"form","explode":true,"allowReserved":false}}},"/plugins/{name}/push":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}/set":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/nodes/{id}/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/swarm/leave":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}}},"/swarm/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false},"rotateWorkerToken":{"style":"form","explode":true,"allowReserved":false},"rotateManagerToken":{"style":"form","explode":true,"allowReserved":false},"rotateManagerUnlockKey":{"style":"form","explode":true,"allowReserved":false}}},"/services/create":{"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/services/{id}/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false},"registryAuthFrom":{"style":"form","explode":true,"allowReserved":false},"rollback":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/secrets/{id}/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/configs/{id}/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}}},"delete":{"/containers/{id}":{"query":{"v":{"style":"form","explode":true,"allowReserved":false},"force":{"style":"form","explode":true,"allowReserved":false},"link":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/images/{name}":{"query":{"force":{"style":"form","explode":true,"allowReserved":false},"noprune":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/volumes/{name}":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/networks/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/nodes/{id}":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/services/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/secrets/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/configs/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}}},"put":{"/containers/{id}/archive":{"query":{"path":{"style":"form","explode":true,"allowReserved":false},"noOverwriteDirNonDir":{"style":"form","explode":true,"allowReserved":false},"copyUIDGID":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/volumes/{name}":{"query":{"version":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}}},"head":{"/containers/{id}/archive":{"query":{"path":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}}}} as Partial<Record<string, Partial<Record<string, EndpointParameterStyles>>>>;
    // </EndpointParameterStyles>
    

    // <EndpointResponseFormats>
    /** Non-json response body modes; missing entries default to `"json"`. SSE skips JSON parse + output validation. */
    export const endpointResponseFormats = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: ResponseFormat }> }>;
    // </EndpointResponseFormats>
    

    // <EndpointSecurityRequirements>
    /** OpenAPI security requirements applied when an endpoint has no explicit entry. */
    export const defaultSecurityRequirements = [] as SecurityRequirements;
    /** Endpoint-specific security requirements that differ from the default. */
    export const endpointSecurityRequirements = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: SecurityRequirements }> }>;
    // </EndpointSecurityRequirements>
    

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  responses?: Record<string, unknown>;
  responseHeaders?: Record<string, unknown>;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  requestFormat: RequestFormat;
  responseFormat: ResponseFormat;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"]
};

/**
 * Minimal response surface used by ApiClient — avoids depending on the DOM `Response`
 * global (helpful for Node without DOM lib). Structural typing accepts fetch Response.
 */
export interface FetcherResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: {
    get(name: string): string | null;
    getSetCookie?: () => string[];
  };
  /** Present on fetch Response; used for SSE / streaming bodies. */
  body?: ReadableStream<Uint8Array> | null;
  json(): Promise<unknown>;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  clone(): FetcherResponse;
}

export interface Fetcher {
    decodePathParams?: (path: string, pathParams: unknown, styles?: Record<string, ParameterSerialization>) => string
  encodeSearchParams?: (searchParams: unknown, styles?: Record<string, ParameterSerialization>) => URLSearchParams | undefined
  /** Merge cookie params into request headers (default: Cookie header). */
  encodeCookies?: (cookies: unknown, headers: Headers) => void
    //
    fetch: (input: {
      method: Method;
      url: URL;
      urlSearchParams?: URLSearchParams | undefined;
      parameters?: EndpointParameters | undefined;
      path: string;
      /** How to encode `parameters.body` (from OpenAPI requestBody content type). */
      requestFormat: RequestFormat;
      /** OpenAPI parameter serialization metadata for the current endpoint. */
      parameterStyles?: EndpointParameterStyles;
      /** OpenAPI security requirements for this operation. Empty means no credentials are required. */
      security?: SecurityRequirements;
      overrides?: RequestInit;
      throwOnStatusError?: boolean
    }) => Promise<FetcherResponse>;
    parseResponseData?: (response: FetcherResponse) => Promise<unknown>
}

export const successStatusCodes = [200,201,202,203,204,205,206,207,208,226,300,301,302,303,304,305,306,307,308] as const;
export type SuccessStatusCode = typeof successStatusCodes[number];

export const errorStatusCodes = [400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,421,422,423,424,425,426,428,429,431,451,500,501,502,503,504,505,506,507,508,510,511] as const;
export type ErrorStatusCode = typeof errorStatusCodes[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues = unknown> extends Omit<Headers, 'append' | 'delete' | 'get' | 'getSetCookie' | 'has' | 'set' | 'forEach'> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[]
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => boolean
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  forEach: (callbackfn: (value: TypedHeaderValues[keyof TypedHeaderValues] | string & {}, key: Extract<keyof TypedHeaderValues, string> | string & {}, parent: TypedHeaders<TypedHeaderValues>) => void, thisArg?: unknown) => void
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

type StatusCodeFromKey<TKey> = TKey extends `${infer TStatusCode extends number}`
  ? TStatusCode
  : TKey extends number
    ? TKey
    : never;

export type TypedApiResponse<TAllResponses = {}, THeaders = {}> = {
  [K in keyof TAllResponses]: StatusCodeFromKey<K> extends infer TStatusCode extends number
    ? TStatusCode extends SuccessStatusCode
      ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
      : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
    : never;
}[keyof TAllResponses];

type OptionalUndefinedKeys<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: Exclude<T[K], undefined>;
};
type InferSchemaValueRaw<T> = T extends (input: unknown) => input is infer U ? U : T extends (...args: never[]) => unknown ? T : T extends object ? { [K in keyof T]: InferSchemaValueRaw<T[K]> } : T;
export type InferSchemaValue<T> = InferSchemaValueRaw<T>;
type InferSchemaInput<T> = OptionalUndefinedKeys<InferSchemaValueRaw<T>>;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string | number, unknown>
    ? TypedApiResponse<InferSchemaValue<TResponses>, TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never>
    : never
  : never

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<SafeApiResponse<TEndpoint>, { status: TStatusCode }>

/**
 * Success-body payload — InferSchemaValue only on success statuses.
 * Filter with extends {} like the old Extract { data: {} } so unknown bodies (e.g. 304) drop out.
 */
export type InferSuccessData<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? {
      [K in keyof TResponses]: StatusCodeFromKey<K> extends infer TStatusCode extends number
        ? TStatusCode extends SuccessStatusCode
          ? Extract<InferSchemaValue<TResponses[K]>, {}>
          : never
        : never;
    }[keyof TResponses]
  : never;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

export type ApiQueryOptions = {
  /** Override whether a generated TanStack Query consumes TanStack Query's AbortSignal. */
  consumeQuerySignal?: boolean;
};

/** Call options merged onto inferred endpoint parameters. */
type ApiRequestOptions = {
  overrides?: RequestInit;
  queryOptions?: ApiQueryOptions;
  withResponse?: boolean;
  throwOnStatusError?: boolean;
  validate?: ValidateSide;
};

/** Parameter bag for an endpoint + request options. */
export type ApiCallParams<TEndpoint> = TEndpoint extends { parameters: infer UParams }
  ? NotNever<InferSchemaInput<UParams>> extends true
    ? InferSchemaInput<UParams> & ApiRequestOptions
    : ApiRequestOptions
  : ApiRequestOptions;

/** Resolve response type from withResponse flag on the call config. */
export type ApiCallResult<TEndpoint, TParams> = TParams extends { withResponse: true }
  ? SafeApiResponse<TEndpoint>
  : InferSuccessData<TEndpoint>;

export type ValidateSide = "none" | "input" | "output" | "both";
export type OnValidate = (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
}) => unknown | Promise<unknown>;

// </ApiClientTypes>

// <TypedStatusError>
export class TypedStatusError<TData = unknown> extends Error {
  response: TypedErrorResponse<TData, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<TData, ErrorStatusCode, unknown>) {
    super(`HTTP ${response.status}: ${response.statusText}`);
    this.name = 'TypedStatusError';
    this.response = response;
    this.status = response.status;
  }
}
// </TypedStatusError>


// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return (() => { const isValid = (schema as (input: unknown) => boolean)(value); if (!isValid) throw new Error("typia validation failed"); return value; })();
};

const runValidate = async (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
  onValidate?: OnValidate;
}): Promise<unknown> => {
  if (ctx.onValidate) return ctx.onValidate(ctx);
  return defaultParse(ctx.schema, ctx.value);
};
// </ValidateHelpers>



// <ApiClient>
export class ApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = "both";
  onValidate?: OnValidate;

  constructor(
    public fetcher: Fetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate },
  ) {
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  setValidate(validate: ValidateSide) {
    this.validate = validate;
    return this;
  }

  setOnValidate(onValidate: OnValidate | undefined) {
    if (onValidate === undefined) {
      delete this.onValidate;
    } else {
      this.onValidate = onValidate;
    }
    return this;
  }

  /**
   * Replace path parameters in URL
   * Supports both OpenAPI format {param} and Express format :param
   */
  defaultDecodePathParams = (url: string, params: unknown, styles?: Record<string, ParameterSerialization>): string => {
    const record = (params ?? {}) as Record<string, unknown>;
    const encode = (value: unknown) => encodeURIComponent(String(value));
    const serialize = (key: string, value: unknown): string => {
      const parameterStyle = styles?.[key];
      const style = parameterStyle?.style ?? "simple";
      const explode = parameterStyle?.explode ?? false;
      if (style === "label") {
        if (Array.isArray(value)) return "." + value.filter((item) => item != null).map(encode).join(explode ? "." : ",");
        if (value && typeof value === "object") {
          const entries = Object.entries(value as Record<string, unknown>).filter(([, item]) => item != null);
          return "." + (explode ? entries.map(([name, item]) => encode(name) + "=" + encode(item)).join(".") : entries.flatMap(([name, item]) => [encode(name), encode(item)]).join(","));
        }
        return "." + encode(value);
      }
      if (style === "matrix") {
        if (Array.isArray(value)) return explode ? value.filter((item) => item != null).map((item) => ";" + key + "=" + encode(item)).join("") : ";" + key + "=" + value.filter((item) => item != null).map(encode).join(",");
        if (value && typeof value === "object") {
          const entries = Object.entries(value as Record<string, unknown>).filter(([, item]) => item != null);
          return explode ? entries.map(([name, item]) => ";" + encode(name) + "=" + encode(item)).join("") : ";" + key + "=" + entries.flatMap(([name, item]) => [encode(name), encode(item)]).join(",");
        }
        return ";" + key + "=" + encode(value);
      }
      if (Array.isArray(value)) return value.filter((item) => item != null).map(encode).join(",");
      if (value && typeof value === "object") {
        return Object.entries(value as Record<string, unknown>)
          .filter(([, item]) => item != null)
          .map(([name, item]) => explode ? encode(name) + "=" + encode(item) : [encode(name), encode(item)])
          .flat()
          .join(",");
      }
      return encode(value);
    };
    return url
      .replace(/{([^}]+)}/g, (_, key: string) =>
        record[key] != null ? serialize(key, record[key]) : `{${key}}`,
      )
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) =>
        record[key] != null ? serialize(key, record[key]) : `:${key}`,
      );
  }

  /** Uses URLSearchParams, skips null/undefined values */
  defaultEncodeSearchParams = (queryParams: unknown, styles?: Record<string, ParameterSerialization>): URLSearchParams | undefined => {
    if (!queryParams || typeof queryParams !== "object") return;

    const searchParams = new URLSearchParams();
    const rawEntries: Array<{ key: string; value: string; allowReserved: boolean }> = [];
    const append = (key: string, value: unknown, allowReserved = false) => {
      const stringValue = String(value);
      searchParams.append(key, stringValue);
      rawEntries.push({ key, value: stringValue, allowReserved });
    };
    const encodeQueryComponent = (value: string, allowReserved: boolean) => {
      const encoded = encodeURIComponent(value);
      return allowReserved
        ? encoded.replace(/%3A|%2F|%3F|%40|%21|%24|%26|%27|%28|%29|%2A|%2B|%2C|%3B|%3D|%5B|%5D/gi, (part) => decodeURIComponent(part))
        : encoded;
    };
    Object.defineProperty(searchParams, "toString", {
      value: () => rawEntries.map(({ key, value, allowReserved }) => `${encodeQueryComponent(key, false)}=${encodeQueryComponent(value, allowReserved)}`).join("&"),
    });
    Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
      if (value != null) {
        // Skip null/undefined values
        const parameterStyle = styles?.[key];
        const style = parameterStyle?.style ?? "form";
        const explode = parameterStyle?.explode ?? true;
        const allowReserved = parameterStyle?.allowReserved === true;
        if (Array.isArray(value)) {
          if (style === "spaceDelimited") append(key, value.filter((item) => item != null).map(String).join(" "), allowReserved);
          else if (style === "pipeDelimited") append(key, value.filter((item) => item != null).map(String).join("|"), allowReserved);
          else if (explode) value.forEach((val) => val != null && append(key, val, allowReserved));
          else append(key, value.filter((item) => item != null).map(String).join(","), allowReserved);
        } else if (typeof value === "object") {
          const entries = Object.entries(value as Record<string, unknown>).filter(([, nestedValue]) => nestedValue != null);
          if (style === "deepObject") {
            for (const [nestedKey, nestedValue] of entries) {
              if (Array.isArray(nestedValue)) nestedValue.forEach((item) => item != null && append(`${key}[${nestedKey}]`, item, allowReserved));
              else append(`${key}[${nestedKey}]`, nestedValue, allowReserved);
            }
          } else if (explode) {
            for (const [nestedKey, nestedValue] of entries) {
              if (Array.isArray(nestedValue)) nestedValue.forEach((item) => item != null && append(nestedKey, item, allowReserved));
              else append(nestedKey, nestedValue, allowReserved);
            }
          } else {
            append(key, entries.flatMap(([nestedKey, nestedValue]) => [nestedKey, ...(Array.isArray(nestedValue) ? nestedValue : [nestedValue])]).map(String).join(","), allowReserved);
          }
        } else {
          append(key, value, allowReserved);
        }
      }
    });

    return searchParams;
  }

  /** Append cookie params as a Cookie header (or merge into existing). */
  defaultEncodeCookies = (cookies: unknown, headers: Headers): void => {
    if (!cookies || typeof cookies !== "object") return;
    const parts = Object.entries(cookies as Record<string, unknown>)
      .filter(([, value]) => value != null)
      .map(([key, value]) => `${key}=${String(value)}`);
    if (!parts.length) return;
    const existing = headers.get("cookie");
    headers.set("cookie", existing ? `${existing}; ${parts.join("; ")}` : parts.join("; "));
  }

  defaultParseResponseData = async (response: FetcherResponse): Promise<unknown> => {
    const contentType = response.headers.get("content-type") ?? "";
    const normalizedContentType = contentType.toLowerCase();
    if (normalizedContentType.includes("text/event-stream")) {
      return response.body ?? null;
    }
    if (normalizedContentType.startsWith("text/")) {
      return (await response.text())
    }

    if (normalizedContentType.startsWith("application/octet-stream")) {
      return new Blob([await response.arrayBuffer()])
    }

    if (
      normalizedContentType.includes("application/json") ||
      (normalizedContentType.includes("application/") && normalizedContentType.includes("json")) ||
      normalizedContentType === "*/*"
      ) {
      try {
        return await response.json();
      } catch {
        return undefined
      }
    }

    return
  }

  // <ApiClient.get>
    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    get<Path extends keyof GetEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("get", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.get>
    
// <ApiClient.post>
    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    post<Path extends keyof PostEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("post", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.post>
    
// <ApiClient.delete>
    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    delete<Path extends keyof DeleteEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("delete", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.delete>
    
// <ApiClient.put>
    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    put<Path extends keyof PutEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("put", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.put>
    
// <ApiClient.head>
    head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    head<Path extends keyof HeadEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("head", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.head>
    

    // <ApiClient.request>
    /**
     * Generic request method with full type-safety for any endpoint
     */
    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: [config?: unknown]
    ): Promise<unknown> {
      return (async () => {
      const requestParams = params[0] as
        | (EndpointParameters & {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse?: boolean;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          })
        | undefined;
      const withResponse = requestParams?.withResponse;
      const throwOnStatusError = requestParams?.throwOnStatusError ?? (withResponse ? false : true);
      let overrides = requestParams?.overrides;
      const validateSide: ValidateSide = requestParams?.validate ?? this.validate;

      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;

      type RuntimeEndpoint = {
        parameters?: Partial<Record<"body" | "query" | "header" | "path" | "cookie", unknown>>;
        responses?: Record<string, unknown>;
      };
      const endpointSchema = EndpointByMethod[method][path] as RuntimeEndpoint;
      const shouldValidateInput = validateSide === "input" || validateSide === "both";
      if (shouldValidateInput && endpointSchema.parameters) {
        const paramSchema = endpointSchema.parameters;
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = paramSchema[key];
          const value = parametersToSend[key];
          if (schema !== undefined && value !== undefined) {
            parametersToSend[key] = await runValidate({
              side: "input",
              method: String(method),
              path: String(path),
              schema,
              value,
              ...(this.onValidate ? { onValidate: this.onValidate } : {}),
            });
          }
        }
      }

      const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(
        this.baseUrl + (path as string),
        parametersToSend.path ?? {},
        endpointParameterStyles[method]?.[path]?.path,
      );
      const url = new URL(resolvedPath);
      const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(
        parametersToSend.query,
        endpointParameterStyles[method]?.[path]?.query,
      );

      if (parametersToSend.cookie) {
        const headers = new Headers((overrides as RequestInit | undefined)?.headers);
        (this.fetcher.encodeCookies ?? this.defaultEncodeCookies)(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const parameterStyles = endpointParameterStyles[method]?.[path as string];
      const response = await this.fetcher.fetch({
        method: method,
        path: (path as string),
        url,
        ...(urlSearchParams ? { urlSearchParams } : {}),
        ...(Object.keys(parametersToSend).length ? { parameters: parametersToSend } : {}),
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        ...(parameterStyles ? { parameterStyles } : {}),
        security: endpointSecurityRequirements[method]?.[path] ?? defaultSecurityRequirements,
        ...(overrides ? { overrides } : {}),
        throwOnStatusError
      });
          const responseFormat = endpointResponseFormats[method]?.[path] ?? "json";
          let data =
            responseFormat === "sse"
              ? (response.body ?? null)
              : await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
          const shouldValidateOutput = validateSide === "output" || validateSide === "both";
          if (
            shouldValidateOutput &&
            responseFormat !== "sse" &&
            (response.ok || !(errorStatusCodes as readonly number[]).includes(response.status)) &&
            endpointSchema?.responses
          ) {
            const responseSchema =
              endpointSchema.responses[String(response.status)] ??
              endpointSchema.responses[String(Math.floor(response.status / 100)) + "xx"] ??
              endpointSchema.responses[String(Math.floor(response.status / 100)) + "XX"] ??
              endpointSchema.responses["default"];
            if (responseSchema) {
              data = await runValidate({
                side: "output",
                method: String(method),
                path: String(path),
                schema: responseSchema,
                value: data,
                ...(this.onValidate ? { onValidate: this.onValidate } : {}),
              });
            }
          }
          const typedResponse = Object.assign(response, {
            data: data,
            json: () => Promise.resolve(data)
          }) as SafeApiResponse<TEndpoint>;

          if (throwOnStatusError && (errorStatusCodes as readonly number[]).includes(response.status)) {
            throw new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>);
          }

          return withResponse ? typedResponse : data;
      })()
    }
    // </ApiClient.request>
}

export function createApiClient(
  fetcher: Fetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate },
) {
  return new ApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
}


/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));

 // With error handling
 const result = await api.get("/users/{id}", { path: { id: "123" }, withResponse: true });
 if (result.ok) {
   // Access data directly
   const user = result.data;
   console.log(user);

   // Or use the json() method for compatibility
   const userFromJson = await result.json();
   console.log(userFromJson);
 } else {
   const error = result.data;
   console.error(`Error ${result.status}:`, error);
 }
*/

// </ApiClient>

  